"use client";

import { Container } from "./Container";
import { Github, Linkedin, Mail, Instagram  } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/site-config";

export function Footer() {
  return (
    <footer className="mt-auto border-t">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-16 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js, Tailwind CSS and shadcn/ui.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                {link.icon === "github" && <Github className="h-5 w-5" />}
                {link.icon === "instagram" && <Instagram className="h-5 w-5" />}
                {link.icon === "linkedin" && <Linkedin className="h-5 w-5" />}
                {link.icon === "mail" && <Mail className="h-5 w-5" />}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}