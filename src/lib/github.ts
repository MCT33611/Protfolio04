
'use server';

import { z } from 'zod';

const repoSchema = z.array(z.object({
  name: z.string(),
  languages_url: z.string().url(),
}));

const languagesSchema = z.record(z.string(), z.number());

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
    const languagePromises = repos.map(repo =>
      fetch(repo.languages_url, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }).then(res => res.json().then(languagesSchema.parse))
    );

    const languagesPerRepo = await Promise.all(languagePromises);

    // Aggregate language bytes
    const totalBytes: Record<string, number> = {};
    languagesPerRepo.forEach(languages => {
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
