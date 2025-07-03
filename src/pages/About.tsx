import FAQs from "../components/about/FAQs";
import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";
import Team from "../components/about/Team";
import { useEffect } from "react";
import Hero from "../components/about/Hero";
import MOU from "../components/about/MOU";
import Journey from "../components/about/Journey";

const About = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const elementId = window.location.hash.substring(1);
      // Find the element by ID
      const element = document.getElementById(elementId);

      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL without jumping (optional)
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.hash
        );
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main className="min-h-screen bg-background isolate">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* About Header */}
        <Hero />
        {/* Our Journey Section */}
        <Journey />
      </div>

      {/* Mission Section */}
      <Mission />

      {/* Vision Section */}
      <Vision />

      {/* Team Section */}
      <Team />

      {/* MOU Section */}
      <MOU />

      {/* FAQs Section */}
      <FAQs />
    </main>
  );
};

export default About;
