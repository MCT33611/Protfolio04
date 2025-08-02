
'use server';

import { z } from 'zod';

const repoSchema = z.array(z.object({
  name: z.string(),
  languages_url: z.string().url().nullable(),
}));

const languagesSchema = z.record(z.string(), z.number()).nullable();

type LanguageData = {
  name: string;
  level: number;
};

export async function getGithubLanguageData(): Promise<LanguageData[] | null> {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    console.error("GitHub token or username is not set in environment variables.");
    return null;
  }

  try {
    // Fetch user repositories
    const repoRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!repoRes.ok) {
      console.error(`Failed to fetch repos: ${repoRes.statusText}`);
      return null;
    }

    const repos = repoSchema.parse(await repoRes.json());
    
    // Fetch languages for each repository
    const languagePromises = repos
      .filter(repo => repo.languages_url) // Filter out repos with no languages_url
      .map(repo =>
        fetch(repo.languages_url!, { // Non-null assertion is safe due to filter
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }).then(res => {
            if (!res.ok) return null; // Handle non-ok responses from language fetches
            return res.json().then(languagesSchema.parse)
        })
      );

    const languagesPerRepo = (await Promise.all(languagePromises)).filter(Boolean);

    // Aggregate language bytes
    const totalBytes: Record<string, number> = {};
    languagesPerRepo.forEach(languages => {
        if (!languages) return;
        for (const lang in languages) {
            if (totalBytes[lang]) {
            totalBytes[lang] += languages[lang];
            } else {
            totalBytes[lang] = languages[lang];
            }
        }
    });
    
    const totalCodeBytes = Object.values(totalBytes).reduce((sum, bytes) => sum + bytes, 0);

    if (totalCodeBytes === 0) {
      return [];
    }

    // Convert to percentage and format for the component
    const languageData: LanguageData[] = Object.entries(totalBytes)
      .map(([name, bytes]) => ({
        name,
        level: Math.round((bytes / totalCodeBytes) * 100),
      }))
      .filter(lang => lang.level > 0) // Filter out languages with 0%
      .sort((a, b) => b.level - a.level); // Sort by proficiency

    return languageData;

  } catch (error) {
    if (error instanceof z.ZodError) {
        console.error("Zod validation error:", error.issues);
    } else {
        console.error("An unexpected error occurred:", error);
    }
    return null;
  }
}
