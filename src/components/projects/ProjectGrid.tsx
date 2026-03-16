"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Search, Filter, Layers } from "lucide-react";
import { AsymmetricSection, AsymmetricGrid, EditorialText } from "@/components/ui/AsymmetricLayout";

export function ProjectGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Projects");

  const categories = ["All Projects", "Web Application", "Mobile Application", "UI/UX Design", "Branding"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All Projects" || project.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <AsymmetricSection className="bg-background relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-primary mb-6">
            <Layers size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em]">Curated Works</span>
          </div>
          <EditorialText className="text-editorial">
            The <br />
            Showcase.
          </EditorialText>
        </div>

        {/* Filters Inline */}
        <div className="flex flex-wrap gap-4 pt-12 md:pt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                category === cat 
                  ? "bg-foreground text-background border-foreground shadow-lg" 
                  : "bg-transparent text-muted-foreground border-muted-foreground/20 hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Grid Implementation */}
      {filteredProjects.length > 0 ? (
        <AsymmetricGrid className="gap-y-32">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.slug} 
              className={`${
                index % 3 === 0 
                  ? "md:col-span-8 md:pr-12" 
                  : index % 3 === 1 
                  ? "md:col-span-4 md:mt-48" 
                  : "md:col-start-3 md:col-span-7"
              }`}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </AsymmetricGrid>
      ) : (
        <div className="py-40 text-center">
          <p className="text-3xl font-light text-muted-foreground italic">No pieces found in this category.</p>
        </div>
      )}
    </AsymmetricSection>
  );
}
