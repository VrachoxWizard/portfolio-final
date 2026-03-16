"use client";

import { projects } from "@/data/projects";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Tag, User, Package, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link href="/projects" className="text-primary hover:underline">Back to projects</Link>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => project.relatedSlugs.includes(p.slug));

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Back Link */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 transition-colors">{project.title}</h1>
          
          <div className="flex flex-wrap gap-8 py-8 border-y border-muted">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Date</p>
                <p className="font-semibold">{project.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tag size={20} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Category</p>
                <p className="font-semibold">{project.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User size={20} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Client</p>
                <p className="font-semibold">{project.client}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {project.gallery.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-muted shadow-lg"
            >
              <Image 
                src={img} 
                alt={`Gallery ${i}`} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover" 
              />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-20 mb-32">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 italic underline underline-offset-8 decoration-primary/30 decoration-4">Project Objective</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-sans">{project.objective}</p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6 italic underline underline-offset-8 decoration-primary/30 decoration-4">The Challenge</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-sans">{project.challenge}</p>
            </section>
          </div>

          <div className="lg:col-span-1">
             <div className="sticky top-32 p-8 bg-card rounded-3xl border border-muted shadow-xl">
               <div className="flex items-center gap-3 mb-8">
                 <Package size={24} className="text-primary" />
                 <h3 className="text-xl font-bold tracking-tight">Tech Stack</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {project.tools.map((tool) => (
                   <span key={tool} className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-semibold border border-transparent hover:border-primary/20 transition-all cursor-default">
                     {tool}
                   </span>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="pt-20 border-t border-muted">
            <h2 className="text-3xl font-bold mb-12">Related Work</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((rp, i) => (
                <ProjectCard key={rp.slug} project={rp} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
