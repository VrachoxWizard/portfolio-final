"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20 container-custom">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground text-lg">Have a project in mind? Let&apos;s build something great together.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="p-8 bg-card rounded-2xl border border-muted shadow-sm flex items-start gap-6 group hover:border-primary/30 transition-colors">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">matevukusic123321@gmail.com</p>
              </div>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-muted shadow-sm flex items-start gap-6 group hover:border-primary/30 transition-colors">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-muted shadow-sm flex items-start gap-6 group hover:border-primary/30 transition-colors">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 p-10 bg-card rounded-3xl border border-muted shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-xl bg-background border border-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 rounded-xl bg-background border border-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="What is this about?"
                  className="w-full px-5 py-4 rounded-xl bg-background border border-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 ml-1">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Your detailed message..."
                  className="w-full px-5 py-4 rounded-xl bg-background border border-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="flex items-center justify-center space-x-3 w-full md:w-auto px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
