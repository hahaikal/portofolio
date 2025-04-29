"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Hero() {
  const fullHeading = " Hello i'm Haikal";
  const fullParagraph = " I am a full-stack developer with a focus on web-based application development.";

  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");

    if (!hasLoadedBefore) {
      const startTimeout = setTimeout(() => {
        setStartTyping(true);
        sessionStorage.setItem("hasLoadedBefore", "true");
      }, 3000);

      return () => clearTimeout(startTimeout);
    } else {
      setStartTyping(true);
    }
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    let headingIndex = 0;
    let paragraphIndex = 0;

    const headingInterval = setInterval(() => {
      setHeading((prev) => prev + fullHeading.charAt(headingIndex));
      headingIndex++;
      if (headingIndex === fullHeading.length) {
        clearInterval(headingInterval);
      }
    }, 100);

    const paragraphInterval = setInterval(() => {
      setParagraph((prev) => prev + fullParagraph.charAt(paragraphIndex));
      paragraphIndex++;
      if (paragraphIndex === fullParagraph.length) {
        clearInterval(paragraphInterval);
      }
    }, 50);

    return () => {
      clearInterval(headingInterval);
      clearInterval(paragraphInterval);
    };
  }, [startTyping]);

  return (
    <Container className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-12">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          {heading}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          {paragraph}
          <span className="animate-pulse">|</span>
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
