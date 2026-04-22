"use client";

import { LanguageProvider } from "@/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      {/* Facebook Blue Header */}
      <Navbar />

      {/* Main Content */}
      <div className="fb-page">
        <Hero />

        <div className="fb-two-col">
          {/* Left Column — Info */}
          <div className="fb-col-left">
            <About />
            <Stats />
            <Contact />
          </div>

          {/* Right Column — Wall */}
          <div className="fb-col-right">
            <Skills />
            <Projects />
            <Experience />
          </div>
        </div>
      </div>

      <Footer />
    </LanguageProvider>
  );
}
