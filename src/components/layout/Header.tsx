"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mail, Send } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "@/components/ui/Modal";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-primary/10 py-3 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_20px_-12px_rgba(255,255,255,0.05)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="text-xl font-black uppercase tracking-[0.2em] text-foreground">
            Mate<span className="text-primary italic">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Hire Me
              </button>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-background border-b border-muted md:hidden"
            >
              <nav className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="bg-primary text-primary-foreground w-full py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Hire Me
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hire Me Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Work Together"
      >
        <div className="space-y-6">
          {isSent ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Message Received!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setTimeout(() => setIsSent(false), 300);
                }}
                className="text-primary font-bold hover:underline pt-4"
              >
                Close Modal
              </button>
            </motion.div>
          ) : (
            <>
              <p className="text-muted-foreground">
                I&apos;m currently available for freelance work and full-time opportunities. 
                Send me a message and let&apos;s discuss your next project.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                  <Mail className="text-primary" />
                  <span className="font-medium">matevukusic123321@gmail.com</span>
                </div>
                
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  setIsSent(true);
                }}>
                   <input 
                    required
                    type="text" 
                    placeholder="What project are you planning?"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-muted focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
                  >
                    <Send size={18} />
                    Send Inquiry
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
