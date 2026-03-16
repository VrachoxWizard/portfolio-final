"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-20 flex flex-col gap-24">
      {/* Bio Section */}
      <section className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {aboutData.bio}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-muted"
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Profile Picture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-20 border-y border-muted">
        <div className="container-custom grid grid-cols-2 md:grid-cols-3 gap-12">
          {aboutData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-extrabold text-primary mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="container-custom pb-20">
        <h2 className="text-3xl font-bold text-center mb-16">Brands I&apos;ve worked with</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {aboutData.brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center p-8 bg-card rounded-2xl border border-muted hover:border-primary/30 transition-colors group"
            >
              <div className="relative w-full aspect-[2/1] grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 33vw, 15vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
