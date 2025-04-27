"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CertificateCarousel } from "@/components/shared/CertificateCarousel";
import { Badge } from "@/components/ui/badge";
import { SKILLS, siteConfig } from "@/constants/site-config";
import { GraduationCap, Briefcase, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/shared/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto py-16 space-y-20">
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6">
              <div className="relative h-24 w-24 rounded-full overflow-hidden bg-muted/30 backdrop-blur-sm border flex-shrink-0">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Profile"
                  className="object-cover w-full h-full"
                  fill
                  sizes="96px"
                  priority
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {siteConfig.name}
                </h1>
                <p className="text-2xl font-semibold text-muted-foreground mt-2">
                  {siteConfig.title}
                </p>
              </div>
            </div>
            
            <div className="max-w-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {siteConfig.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {SKILLS.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>

              <Button className="group mt-6">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-stretch gap-x-6"
          >
            <div className="p-6 rounded-lg bg-card border space-y-4 flex-1 flex flex-col items-center text-center">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-muted-foreground">S1 Information Systems (Ongoing)</p>
              <p className="text-sm text-muted-foreground">Universitas Terbuka</p>
            </div>

            <div className="p-6 rounded-lg bg-card border space-y-4 flex-1 flex flex-col items-center text-center">
              <Briefcase className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="text-muted-foreground">IT Operator in Elementary School Institutions</p>
              <p className="text-sm text-muted-foreground">Februay 2024 - Present</p>
            </div>
          </motion.div>
        </section>

        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
            <CertificateCarousel />
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
