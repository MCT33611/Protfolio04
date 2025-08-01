"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send, MoveRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }
  
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:pl-24">
         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Contact</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Send Me a Message
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Your Name" {...field} className="bg-transparent border-t-0 border-x-0 border-b-2 border-primary/20 rounded-none focus:border-primary transition-all duration-300 h-12 px-2"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                                <FormControl>
                                    <Input placeholder="Your Email" {...field} className="bg-transparent border-t-0 border-x-0 border-b-2 border-primary/20 rounded-none focus:border-primary transition-all duration-300 h-12 px-2"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="md:col-span-2 flex justify-center mt-8">
                         <Button type="submit" size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 group">
                            Send Message
                            <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
      </div>
    </section>
  );
}
