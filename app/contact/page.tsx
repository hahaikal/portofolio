"use client";

import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import { Mail, MessageSquare, User } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="container mx-auto py-16">
        <div className="mx-auto max-w-2xl space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 text-center"
          >
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground p-2">
              Have a question or want to work together? Fill out the form below and
              I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-lg border bg-card/50 backdrop-blur-sm p-8 shadow-lg"
          >
            <div className="grid gap-8 sm:grid-cols-3 mb-8">
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
                <User className="h-6 w-6 text-muted-foreground" />
                <span className="text-sm font-medium">Personal Touch</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
                <Mail className="h-6 w-6 text-muted-foreground" />
                <span className="text-sm font-medium">Quick Response</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
                <MessageSquare className="h-6 w-6 text-muted-foreground" />
                <span className="text-sm font-medium">Clear Communication</span>
              </div>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}