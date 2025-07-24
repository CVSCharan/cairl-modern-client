import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";
import Team from "../components/about/Team";
import Hero from "../components/about/Hero";
import MOU from "../components/MOU";
import Journey from "../components/about/Journey";
import NewsLetters from "../components/NewsLetters";
import SEOMetadata from "../components/seo/SEOMetadata";
import useSmoothScroll from "../hooks/useSmoothScroll";

const About = () => {
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-background isolate">
      <SEOMetadata
        title="About CAiRL - Our Mission, Vision, and Team"
        description="Learn about the Center for AI Research and Learning (CAiRL), our mission to democratize AI, our vision for the future, and the team behind our success."
        keywords="about CAiRL, CAiRL mission, CAiRL vision, CAiRL team, AI research center"
        ogTitle="About CAiRL - Our Mission, Vision, and Team"
        ogDescription="Learn about the Center for AI Research and Learning (CAiRL), our mission to democratize AI, our vision for the future, and the team behind our success."
        ogUrl={window.location.href}
        twitterTitle="About CAiRL - Our Mission, Vision, and Team"
        twitterDescription="Learn about the Center for AI Research and Learning (CAiRL), our mission to democratize AI, our vision for the future, and the team behind our success."
      />
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

      {/* Newsletter Section */}
      <NewsLetters />
    </main>
  );
};

export default About;
