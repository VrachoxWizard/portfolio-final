"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AsymmetricSection, AsymmetricGrid, EditorialText } from "@/components/ui/AsymmetricLayout";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <AsymmetricSection className="relative min-h-[90vh] flex items-center pt-0 overflow-hidden">
      <AsymmetricGrid>
        <div className="md:col-span-8 z-10 flex flex-col justify-center">
          <EditorialText className="text-editorial">
            Creative <br />
            <span className="text-primary/90">Anthology</span>
          </EditorialText>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mt-12"
          >
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-snug mb-10">
              Hi, I am <span className="text-foreground font-bold italic underline decoration-primary/10 underline-offset-[12px]">Mate</span>.
              <br />
              <span className="opacity-80">Full-stack developer architecting <br /> high-fidelity digital experiences.</span>
            </p>
            
            <div className="flex flex-wrap gap-8 pt-6">
              <button className="bg-foreground text-background px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-500 shadow-xl">
                View Anthology
              </button>
              <button className="bg-transparent border border-muted-foreground/30 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-muted transition-all duration-300">
                The Process
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ y: y1, opacity }}
          className="hidden md:block md:col-span-4 relative h-[750px] mt-24"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-6 scale-110 blur-3xl opacity-20" />
          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-muted shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform rotate-3">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
              alt="Developer Workspace"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-in-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
          </div>
        </motion.div>
      </AsymmetricGrid>

      <motion.div 
        style={{ opacity }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-muted-foreground"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} strokeWidth={3} />
        </motion.div>
      </motion.div>
    </AsymmetricSection>
  );
}
