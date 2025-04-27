"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: "Google Developers X Dicoding",
    description: "Fundamental Front-End Web Development",
    image: "/Google Developers X Dicoding Fundamental FE.png",
    pdfUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/1a0b016ee66786b1d2e003f60c0f427a3e711de3/view"
  },
  {
    title: "AWS X Dicoding",
    description: "AWS Cloud Practitioner Essentials",
    image: "/AWS X Dicoding Cloud Practitioner Essentials.png",
    pdfUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/542d866a6cc01a70447b54df83309405980aef12/view"
  },
  {
    title: "Google Cloud Partner X Dicoding",
    description: "Dasar AI",
    image: "/Google Cloud Partner X Dicoding Dasar AI.png",
    pdfUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/f3d02bab91d3f08b42ee291ea57bc2178648af40/view"
  },
  {
    title: "Google Developers X Dicoding",
    description: "Dasar Pemrograman Web",
    image: "/Google Developers X Dicoding Dasar Pemrograman Web.png",
    pdfUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/c776e818bb5d322a5e0b7a1d76dd78442880d35f/view"
  },
  {
    title: "Google Developers X Dicoding",
    description: "Dasar Data Science",
    image: "/Google Developers X Dicoding Dasar Data Science.png",
    pdfUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/f27707cabdf1ea421da0ce875e119a539e919214/view"
  },
  {
    title: "Google Developers X Dicoding",
    description: "Dasar Visualisasi Data",
    image: "/Google Developers X Dicoding Dasar Visualisasi Data.png",
    pdfUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/5020eaf8bd1c0585e31242cc2f56571ffcded7b9/view"
  },
  {
    title: "Dicoding",
    description: "Membuat Front-End Web untuk Pemula",
    image: "/Dicoding FE untuk pemula.png",
    pdfUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/9052e9ee3d3ce3666ec23e25c5caeeb2b8471199/view"
  },
  {
    title: "Dicoding",
    description: "Dasar SQL",
    image: "/Dicoding Dasar SQL.png",
    pdfUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/fb3cf4ad4b7804eb02da8de5defbc663690fa29d/view"
  },
  {
    title: "Dicoding",
    description: "Dasar Pemrograman JavaScript",
    image: "/Dicoding Dasar Pemrograman JavaScript.png",
    pdfUrl: "https://www.dicoding.com/dicodingassets/coursecertificate/22acc8dac9c12753a29f5d93d973f82383ab05b4/view"
  },
];

export function CertificateCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const handleCertificateClick = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: selectedIndex === index ? 1 : 0.5,
                scale: selectedIndex === index ? 1 : 0.9
              }}
              transition={{ duration: 0.3 }}
              className="relative flex-[0_0_100%] min-w-0 pl-4"
            >
              <div 
                className="aspect-[16/9] overflow-hidden rounded-lg border group cursor-pointer relative"
                onClick={() => handleCertificateClick(cert.pdfUrl)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  fill
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
                  <h1 className="text-xl font-semibold mb-2">{cert.title}</h1>
                  <p className="text-sm opacity-80">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center gap-2 mt-4">
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              selectedIndex === index ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}