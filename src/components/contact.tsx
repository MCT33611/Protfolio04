"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
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
  
  const FloatingLabelInput = ({ field, label }: { field: any, label: string }) => (
    <FormItem className="relative">
      <FormControl>
        <Input placeholder=" " {...field} className="peer block h-12 pt-4"/>
      </FormControl>
      <FormLabel className="absolute text-base text-muted-foreground duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-3 peer-focus:text-accent peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
        {label}
      </FormLabel>
      <FormMessage />
    </FormItem>
  );

  const FloatingLabelTextarea = ({ field, label }: { field: any, label: string }) => (
     <FormItem className="relative">
      <FormControl>
        <Textarea placeholder=" " {...field} className="peer block h-32 pt-6"/>
      </FormControl>
      <FormLabel className="absolute text-base text-muted-foreground duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] start-3 peer-focus:text-accent peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
        {label}
      </FormLabel>
       <FormMessage />
    </FormItem>
  );

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get In Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>
        </div>
        <Card className="max-w-xl mx-auto shadow-lg">
            <CardContent className="p-6 md:p-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => <FloatingLabelInput field={field} label="Your Name" />}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => <FloatingLabelInput field={field} label="Your Email" />}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => <FloatingLabelTextarea field={field} label="Your Message" />}
                        />
                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-all duration-300 transform hover:scale-105 group">
                            Send Message
                            <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
