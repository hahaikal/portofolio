"use client";

import { ProjectCard } from "@/components/shared/ProjectCard";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/shared/PageTransition";

const projects = [
  {
    title: "SIPAS (MVP)",
    description: "SIPAS adalah platform Software as a Service (SaaS) yang dirancang untuk menjadi solusi operasional digital terpadu bagi sekolah. Aplikasi ini digunakan untuk operasional tempat sekolah tempat saya bekerja dan nantinya akan ditawarkan ke sekolah-sekolah lain sebagai produk SaaS.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Bot WA (Gemini AI)"],
    demoUrl: "https://administration-archive-app.vercel.app/",
    githubUrl: "https://github.com/hahaikal/Administration-Archive-app",
    imageUrls: ["/SIPAS2.png"],
  },
  {
    title: "SIPAS (Full Version)",
    description: "Ini adalah versi lengkap dari MVP SIPAS yang mencakup berbagai fitur seperti pengarsipan surat masuk dan keluar, pengelolaan arsip digital, manajemen inventaris, Pembuatan Surat Otomatis, disposisi, Landing page yang menjual, blog berita, E-Raport, E-Learning, dan masih banyak lagi.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "Redis", "Cloudinary ", "Backblaze B2", "Bot WA (Gemini AI)"],
    githubUrl: "https://github.com/hahaikal/sipas",
    imageUrls: ["/SIPAS.png"],
  },
  {
    title: "Sistem Informasi Klinik",
    description: "Aplikasi Sistem Informasi Klinik ini dirancang untuk mengelola operasional harian klinik secara efisien dan terstruktur. Dibangun sebagai tugas kompetensi, aplikasi ini mengimplementasikan fitur inti yang esensial dengan fokus pada alur sistem dan logika pemrograman yang rapi",
    technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com/hahaikal/clinic-app",
    imageUrls: [
      "/c1.png",
      "/c2.png",
      "/c3.png",
      "/c4.png",
      "/c5.png",
    ],
  },
  {
    title: "Football Prediction App",
    description: "P-APP adalah platform perangkat lunak inovatif yang dirancang untuk memberikan prediksi hasil pertandingan sepak bola berdasarkan analisis data real-time menggunakan Model Machine Learning. Dibangun berdasarkan Hipotesis saya bahwa perubahan signifikan pada odds menjelang pertandingan dimulai merupakan sinyal kuat yang merefleksikan sentimen dan informasi kolektif dari pasar",
    technologies: ["Python", "FastAPI", "NextJs", "TypeScript", "PostgreSQL", "Celery", "pandas", "Scikit-learn"],
    githubUrl: "https://github.com/hahaikal/BE-P-APP",
    imageUrls: [
      "/app1.png",
      "/app2.png",
      "/app3.png"
    ],
  },
  {
    title: "Profile Company",
    description: "Ini adalah web dimana saya menawarkan aplikasi-aplikasi yang ada sebelumnya untuk ditawarkan ke orang, institusi atau organisasi yang berminat dengan solusi yang saya tawarkan. semua aplikasi saya, saya tawarkan dalam bentuk Software as a Service (SaaS)",
    technologies: ["TypeScript", "NextJs", "Tailwind CSS", "shadcn UI"],
    githubUrl: "https://github.com/hahaikal/Profile-LingkupIT",
    imageUrls: [
      "/l1.png",
      "/l2.png",
      "/l3.png",
      "/l4.png",
      "/l5.png",
    ],
  },
  {
    title: "Finotes (Financial Notes)",
    description: "Finotes adalah aplikasi catatan keuangan yang awalnya dirancang untuk membantu saya mengelola, melacak, serta membuat laporan keuangan saya sendiri. Saya membuat aplikasi ini karena tidak puas dengan aplikasi yang ada di pasaran.",
    technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com/hahaikal/Finotes",
    imageUrls: [
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
  },
  {
    title: "Web Portofolio",
    description: "A modern and responsive personal portfolio website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", ],
    githubUrl: "https://github.com/hahaikal/portofolio",
    imageUrls: ["/portofolio.png"],
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