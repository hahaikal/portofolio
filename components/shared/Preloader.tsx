'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "WELCOME TO MY PORTOFOLIO";

export function Preloader() {
  const [isComplete, setIsComplete] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const appContent = document.getElementById('app-content');
    const body = document.body;
    
    body.style.overflow = "hidden";
    
    if (appContent) {
      appContent.classList.add('invisible');
    }
    
    const timer = setTimeout(() => {
      setIsComplete(true);
      
      setTimeout(() => {
        if (appContent) {
          appContent.classList.remove('invisible');
        }
        setShouldShow(false);
        body.style.overflow = "auto";
      }, 500);
    }, 2200);

    return () => {
      clearTimeout(timer);
      body.style.overflow = "auto";
      if (appContent) {
        appContent.classList.remove('invisible');
      }
    };
  }, []);

  if (!shouldShow) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const letterVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: i % 2 === 0 ? 50 : -50,
      x: i % 3 === 0 ? -50 : i % 3 === 1 ? 50 : 0,
      rotate: i % 2 === 0 ? 90 : -90,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isComplete ? "exit" : "visible"}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative">
          <motion.div
          variants={letterContainerVariants}
          className="relative z-10 flex flex-wrap items-center justify-center text-4xl font-bold"
        >
          {text.split(" ").map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block mr-2"
              style={{ originX: 0.5, originY: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1.2, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          <div className="h-32 w-32 rounded-full border-4 border-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
}