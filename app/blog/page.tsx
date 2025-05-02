"use client";

import { PageTransition } from "@/components/shared/PageTransition";
import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="container mx-auto py-16">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <CalendarClock className="w-24 h-24 text-primary relative z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
              Blog Coming Soon
            </h1>
            <p className="text-xl text-muted-foreground">
              Were working hard to bring you amazing content. Stay tuned for interesting articles about web development, technology, and more!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}