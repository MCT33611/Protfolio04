
import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, IndianRupee } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Muhammed Fahmi`,
    description: service.shortDescription,
     icons: {
      icon: '/icons8-f-16.png',
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter(s => s.slug !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen text-foreground animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src={service.images[0]}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint={service.imageHints[0]}
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 md:px-6 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block rounded-full bg-primary/20 p-4 mb-6">
                <div className="p-2 rounded-full bg-primary/20 flex items-center justify-center gap-x-2">
                    {service.icons.map((Icon, idx) => (
                        <div key={idx} className='mx-1'>
                        <Icon />
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 text-white">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:pl-24 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Detailed Description */}
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary mb-4">Detailed Description</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.detailedDescription}
              </p>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <aside className="space-y-8">
            {/* Tech Stack */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-headline text-primary">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {(service.techStack || service.tools)?.split(', ').map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Includes */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-headline text-primary">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {service.includes.split(', ').map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="bg-primary/10 border-primary/30 rounded-2xl text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary">Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Fixed Project</h4>
                  <p className="text-2xl font-bold text-primary flex items-center justify-center"><IndianRupee className="w-6 h-6 mr-1" /> {service.pricing.fixed.replace(/₹/g, '')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Monthly Maintenance</h4>
                  <p className="text-xl font-bold text-primary flex items-center justify-center"><IndianRupee className="w-5 h-5 mr-1" /> {service.pricing.monthly.replace(/₹/g, '')}</p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
        
        {/* Other Services */}
        <div className="mt-24 pt-16 border-t border-border">
           <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">Other Services</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {otherServices.map(other => (
                <Link href={`/services/${other.slug}`} key={other.slug} className="group">
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 rounded-2xl p-6 flex flex-col items-center text-center h-full group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="p-4 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:scale-110 flex items-center justify-center gap-x-2">
                        {other.icons.map((Icon, idx) => (
                        <div key={idx} className='mx-1'>
                            <Icon />
                        </div>
                        ))}
                    </div>
                    <CardHeader className="p-0">
                        <CardTitle className="text-xl font-headline mb-2">{other.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <CardDescription className="text-muted-foreground line-clamp-3">
                        {other.shortDescription}
                        </CardDescription>
                    </CardContent>
                    </Card>
                </Link>
             ))}
           </div>
           <div className="text-center mt-12">
                <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/20">
                    <Link href="/#services">View All Services</Link>
                </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
