import { useEffect } from "react";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Transformation from "../components/landing/Transformation";
import Events from "../components/landing/Events";
import CTA from "../components/CTA";
import Contact from "../components/landing/Contact";

const Landing = () => {
  // Smooth scroll to section when URL has hash
  useEffect(() => {
    // Disable scroll restoration so we can manually control it
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 100); // small delay to ensure DOM is rendered
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section - Full width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <Hero />
      </div>

      {/* About Section - With container constraints */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <About />
      </div>

      {/* Transformation Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary/30">
        <Transformation />
      </div>

      {/* Events Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <Events />
      </div>

      {/* CTA Section */}
      <CTA />

      {/* Contact Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <Contact />
      </div>
    </main>
  );
};

export default Landing;
