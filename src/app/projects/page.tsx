import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata = {
  title: "Projects | Modern Portfolio",
  description: "Explore my latest work across web, mobile, and design.",
};

export default function ProjectsPage() {
  return (
    <div className="py-10">
      <ProjectGrid />
    </div>
  );
}
