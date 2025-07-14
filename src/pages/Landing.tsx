import { useEffect } from "react";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Transformation from "../components/landing/Transformation";
import Events from "../components/landing/Events";
import CTA from "../components/CTA";
import Contact from "../components/landing/Contact";
import SEOMetadata from "../components/seo/SEOMetadata";

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
      <SEOMetadata
        title="CAiRL - Center for AI Research and Learning"
        description="The Center for AI Research and Learning (CAiRL) is a dynamic hub for AI innovation, fostering collaboration and advancing research to tackle real-world challenges."
        keywords="AI research, machine learning, artificial intelligence, CAiRL, AI innovation"
        ogTitle="CAiRL - Center for AI Research and Learning"
        ogDescription="The Center for AI Research and Learning (CAiRL) is a dynamic hub for AI innovation, fostering collaboration and advancing research to tackle real-world challenges."
        ogImage="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750381598/Element-1_tsbawm.png"
        ogUrl="https://www.cairl.org/"
        twitterTitle="CAiRL - Center for AI Research and Learning"
        twitterDescription="The Center for AI Research and Learning (CAiRL) is a dynamic hub for AI innovation, fostering collaboration and advancing research to tackle real-world challenges."
        twitterImage="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750381598/Element-1_tsbawm.png"
      />
      {/* Hero Section - Full width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <Hero />
      </div>

      {/* About Section - With container constraints */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <About />
      </div>

      {/* Transformation Section */}
      <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary flex flex-col justify-center items-center">
        <Transformation />
      </div>

      {/* Events Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <Events />
      </div>

      {/* CTA Section */}
      <CTA />

      {/* Contact Section */}
      <div className="w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <Contact />
      </div>
    </main>
  );
};

export default Landing;
