import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-muted/30 pt-32 pb-16">
      <div className="container-custom text-center">
        <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-black uppercase tracking-tighter mb-16 leading-none">
          Let&apos;s build <br />
          <span className="text-primary italic">something iconic.</span>
        </h2>
        
        <div className="flex justify-center space-x-12 mb-20">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-500 uppercase text-xs font-black tracking-[0.3em]"
              aria-label={social.label}
            >
              {social.label}
            </Link>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-muted/20">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">
            &copy; {new Date().getFullYear()} Mate Portfolio
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">
            Built with Next.js & Tailwind v4
          </p>
        </div>
      </div>
    </footer>
  );
}
