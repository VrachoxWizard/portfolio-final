import { Hero } from "@/components/home/Hero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <ProjectGrid />
    </div>
  );
}
