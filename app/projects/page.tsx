"use client";

import { ProjectCard } from "@/components/shared/ProjectCard";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/shared/PageTransition";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe integration for payments.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    lastUpdated: "2 weeks ago",
    imageUrl: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    demoUrl: "https://tasks-demo.example.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    lastUpdated: "1 month ago",
    imageUrl: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using stable diffusion models.",
    technologies: ["Python", "FastAPI", "React", "TensorFlow"],
    demoUrl: "https://ai-image-gen.example.com",
    githubUrl: "https://github.com/yourusername/ai-image-gen",
    lastUpdated: "3 months ago",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and side projects, built with modern technologies
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}