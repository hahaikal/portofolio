"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 w-full h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="h-24">
        <CardTitle className="flex items-start justify-between">
          <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 h-40 ">
        <div className="h-32">
          {description.split('\n').map((line, index) => (
            <p key={index} className="text-sm text-muted-foreground ">
              {line}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-2" >
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary"
              className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex gap-2 pt-4">
          {demoUrl && (
            <Button 
              asChild 
              variant="default" 
              size="sm"
              className="flex-1 hover:scale-105 transition-transform duration-200"
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className="flex-1 hover:scale-105 transition-transform duration-200"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}