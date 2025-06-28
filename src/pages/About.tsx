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
    <main className="min-h-screen bg-background">
      <div className="relative w-full">
        {/* Background Element - Now covers header to form */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-35 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750381598/Element-1_tsbawm.png"
            alt="Background Element"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto pb-16 relative z-20">
          {/* About Header */}
          <Hero />
          {/* Our Journey Section */}
          <Journey />
        </div>
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
