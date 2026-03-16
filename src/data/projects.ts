export interface Project {
  slug: string;
  title: string;
  category: "Web Application" | "Mobile Application" | "UI/UX Design" | "Branding";
  summary: string;
  thumbnail: string;
  date: string;
  tags: string[];
  gallery: string[];
  client: string;
  objective: string;
  tools: string[];
  challenge: string;
  relatedSlugs: string[];
}

export const projects: Project[] = [
  {
    slug: "health-plus",
    title: "Health Plus Platform",
    category: "Web Application",
    summary: "A comprehensive health monitoring dashboard for patients and doctors.",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    date: "March 2024",
    tags: ["Next.js", "Tailwind", "Firebase"],
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1504868584819-f8e90526354a?auto=format&fit=crop&q=80&w=1200"
    ],
    client: "Healthcare Solutions Inc.",
    objective: "Streamline patient data visualization and consultation booking.",
    tools: ["React", "Typescript", "Chart.js"],
    challenge: "Handling real-time data from disparate medical devices while maintaining HIPAA compliance.",
    relatedSlugs: ["agency-pro", "design-system-v1"]
  },
  {
    slug: "agency-pro",
    title: "Creative Agency Hub",
    category: "Branding",
    summary: "Brand identity and web experience for a high-growth creative agency.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    date: "January 2024",
    tags: ["Branding", "UI/UX", "Adobe Suite"],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    ],
    client: "Nova Creative",
    objective: "Establish a bold, modern digital presence.",
    tools: ["Figma", "Illustrator", "React"],
    challenge: "Translating a print-first brand philosophy into a dynamic digital environment.",
    relatedSlugs: ["health-plus", "pm-suite"]
  },
  {
    slug: "pm-suite",
    title: "Project Management Tool",
    category: "Web Application",
    summary: "Intuitive Kanban and timeline-based project management for small teams.",
    thumbnail: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    date: "December 2023",
    tags: ["SaaS", "Productivity", "Drag & Drop"],
    gallery: [
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1200"
    ],
    client: "WorkFlow Corp",
    objective: "Simplify team collaboration without the bloat of Jira.",
    tools: ["dnd-kit", "Next.js", "Prisma"],
    challenge: "Optimizing database queries for complex project inheritance structures.",
    relatedSlugs: ["agency-pro", "cloud-box"]
  },
  {
    slug: "cloud-box",
    title: "Cloud Storage App",
    category: "Mobile Application",
    summary: "Secure mobile-first file storage and sharing application.",
    thumbnail: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800",
    date: "October 2023",
    tags: ["React Native", "Swift", "AWS"],
    gallery: [
      "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=1200"
    ],
    client: "SecureStore",
    objective: "Provide zero-knowledge encryption with a user-friendly mobile experience.",
    tools: ["Expo", "Node.js", "S3"],
    challenge: "Ensuring cross-platform parity for complex encryption algorithms.",
    relatedSlugs: ["pm-suite", "chat-connect"]
  },
  {
    slug: "chat-connect",
    title: "Real-time Chat App",
    category: "Web Application",
    summary: "Modern chat interface with focus on speed and minimal latency.",
    thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
    date: "August 2023",
    tags: ["WebSockets", "Real-time", "Socket.io"],
    gallery: [
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1200"
    ],
    client: "SocialLoop",
    objective: "Build a highly scalable chat infrastructure.",
    tools: ["Redis", "Node.js", "React"],
    challenge: "Managing sticky sessions across multiple Kubernetes clusters.",
    relatedSlugs: ["cloud-box", "design-system-v1"]
  },
  {
    slug: "design-system-v1",
    title: "Corporate Design System",
    category: "UI/UX Design",
    summary: "A battle-tested design system used across 10+ internal products.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    date: "June 2023",
    tags: ["Design System", "Storybook", "Figma"],
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
    ],
    client: "Enterprise Global",
    objective: "Unify the visual language of fragmented product lines.",
    tools: ["Tailwind", "Radix UI", "Framer Motion"],
    challenge: "Balancing flexibility for different dev teams with rigid brand guidelines.",
    relatedSlugs: ["health-plus", "chat-connect"]
  }
];
