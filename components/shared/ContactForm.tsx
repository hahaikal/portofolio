"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Resend } from "resend";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      return;
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field}
                  className="bg-background/50 backdrop-blur-sm focus-visible:ring-2 transition-all duration-200"
                />
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
              <FormLabel className="text-foreground/80">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="your.email@example.com" 
                  type="email" 
                  {...field}
                  className="bg-background/50 backdrop-blur-sm focus-visible:ring-2 transition-all duration-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/80">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="min-h-[120px] bg-background/50 backdrop-blur-sm focus-visible:ring-2 transition-all duration-200"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full group hover:scale-105 transition-all duration-200"
        >
          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          Send Message
        </Button>
      </form>
    </Form>
  );
}