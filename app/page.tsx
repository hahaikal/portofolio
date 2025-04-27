"use client";

import { Hero } from "@/components/homepage/Hero";
import { PageTransition } from "@/components/shared/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  );
}