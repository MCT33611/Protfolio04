'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { AlertTriangle, ServerIcon, SheetIcon } from 'lucide-react';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AngularIcon, CSSIcon, DotNetIcon, HTMLIcon, JSIcon, ReactIcon } from "@/lib/icons";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="lg:pl-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Services I Offer</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From full-stack web solutions to static websites and app development — I help bring your digital ideas to life with precision and performance.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <Alert className="bg-primary/10 border-primary/30 text-primary-foreground">
              <AlertTriangle className="h-4 w-4 !text-primary" />
              <AlertTitle className="font-headline text-primary">Part-Time Availability Notice</AlertTitle>
              <AlertDescription className="text-primary/80">
                As a full-time developer at IBS Fulcro, Mumbai, I provide these services as part-time side hustles. I primarily work on these projects during weekends (Saturday & Sunday) and my free time at night. I enjoy this work and like to take the time to build things right. The prices or fees mentioned are rough market estimates and are always negotiable in my case.
              </AlertDescription>
            </Alert>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 rounded-2xl p-6 flex flex-col items-center text-center h-full group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="p-4 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:scale-110 flex items-center justify-center gap-x-2">
                    {service.icons.map((Icon, idx) => (
                      <div key={idx} className='mx-1'>
                        <Icon />
                      </div>
                    ))}
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-headline mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-muted-foreground">
                      {service.shortDescription}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}