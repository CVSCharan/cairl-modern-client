import FAQs from "../components/about/FAQs";
import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";
import Team from "../components/about/Team";
import { useEffect } from "react";
import Hero from "../components/about/Hero";
import MOU from "../components/MOU";
import Journey from "../components/about/Journey";
import NewsLetters from "../components/NewsLetters";

const About = () => {
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
    <main className="min-h-screen bg-background isolate">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* About Header */}
        <Hero />
        {/* Our Journey Section */}
        <Journey />
      </div>

      {/* Mission Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <Mission />
      </div>

      {/* Vision Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <Vision />
      </div>

      {/* Team Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <Team />
      </div>

      {/* MOU Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <MOU />
      </div>

      {/* FAQs Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <FAQs />
      </div>

      {/* Newsletter Section */}
      <NewsLetters />
    </main>
  );
};

export default About;
