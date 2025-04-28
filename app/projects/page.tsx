"use client";

import { ProjectCard } from "@/components/shared/ProjectCard";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/shared/PageTransition";

const projects = [
  {
    title: "SIPAS (Sistem Informasi Pengarsipan Sekolah)",
    description: "Fitur utama:\n 1. Ekstraksi otomatis isi surat\n 2. Role Based Access Control (RBAC)\n 3. Integrasi Whatsapp Bot dengan Ai untuk Analisa isi PDF & kirim laporan hasil AI ",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
    demoUrl: "https://administration-archive-app.vercel.app/",
    githubUrl: "https://github.com/hahaikal/Administration-Archive-app",
    imageUrl: "/SIPAS2.png",
  },
  {
    title: "Finotes (Financial Notes)",
    description: "Finotes - A simple and powerful financial notes app to track your income and expenses with ease",
    technologies: ["Laravel", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com/hahaikal/Finotes",
    imageUrl: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Web Portofolio",
    description: "A modern and responsive personal portfolio website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", ],
    githubUrl: "https://github.com/hahaikal/portofolio",
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
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcase of my recent work and side projects
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
                key={index}
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