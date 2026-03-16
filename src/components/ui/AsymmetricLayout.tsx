"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AsymmetricLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AsymmetricSection({ children, className }: AsymmetricLayoutProps) {
  return (
    <section className={cn("section-padding overflow-hidden", className)}>
      <div className="container-custom relative">
        {children}
      </div>
    </section>
  );
}

export function AsymmetricGrid({ children, className }: AsymmetricLayoutProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16", className)}>
      {children}
    </div>
  );
}

export function EditorialText({ 
  children, 
  className,
  delay = 0 
}: AsymmetricLayoutProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("text-editorial", className)}
    >
      {children}
    </motion.div>
  );
}
