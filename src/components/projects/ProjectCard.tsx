import { Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2rem] bg-muted">
          <motion.div 
            className="absolute inset-0 z-10 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
          
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          />

          {/* Reveal Overlay */}
          <motion.div 
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileHover={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-foreground/90 flex flex-col justify-end p-8 text-background z-20"
          >
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-60">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold leading-tight">
                  {project.title}
                </h3>
              </div>
              <div className="p-3 rounded-full bg-primary text-primary-foreground">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimal Label (Visible when not hovered) */}
        <div className="mt-6 flex justify-between items-start group-hover:opacity-0 transition-opacity duration-300">
           <div>
             <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
             <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-1">{project.category}</p>
           </div>
           <span className="text-[10px] font-black opacity-20 uppercase mt-1 tracking-tighter italic">No. 0{index + 1}</span>
        </div>
      </Link>
    </motion.div>
  );
}
