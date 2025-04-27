"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

export function Hero() {
  return (
    <Container className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-12">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Building beautiful digital experiences with passion and purpose
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          I&apos;m a full-stack developer focused on building products that make a difference.
          Let&apos;s bring your ideas to life.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}