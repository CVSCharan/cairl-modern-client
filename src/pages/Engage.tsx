import { useEffect } from "react";
import MOU from "../components/MOU";
import Hero from "../components/engage/Hero";
import Membership from "../components/engage/Membership";
import Partner from "../components/engage/Partner";
import GetInTouch from "../components/engage/GetInTouch";
import NewsLetters from "../components/NewsLetters";
import Contact from "../components/engage/Contact";
import FAQs from "../components/engage/FAQs";
import SEOMetadata from "../components/seo/SEOMetadata";

const Engage = () => {
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
    <main className="relative overflow-hidden bg-secondary">
      <SEOMetadata
        title="Engage with CAiRL - Membership, Partnerships, and Contact"
        description="Discover how to engage with the Center for AI Research and Learning (CAiRL). Explore membership options, partnership opportunities, and how to get in touch with us."
        keywords="CAiRL engagement, CAiRL membership, CAiRL partnerships, contact CAiRL, AI community"
        ogTitle="Engage with CAiRL - Membership, Partnerships, and Contact"
        ogDescription="Discover how to engage with the Center for AI Research and Learning (CAiRL). Explore membership options, partnership opportunities, and how to get in touch with us."
        ogUrl={window.location.href}
        twitterTitle="Engage with CAiRL - Membership, Partnerships, and Contact"
        twitterDescription="Discover how to engage with the Center for AI Research and Learning (CAiRL). Explore membership options, partnership opportunities, and how to get in touch with us."
      />
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <Hero />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <Membership />
      </div>

      {/* MOU Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <MOU />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <Partner />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <GetInTouch />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <FAQs />
      </div>

      {/* Contact Info Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <Contact />
      </div>

      {/* Newsletter Section */}
      <NewsLetters />
    </main>
  );
};

export default Engage;
