import { useEffect } from "react";
import CTA from "../components/CTA";
import { motion } from "framer-motion";

const ResearchAndInnovation = () => {
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
    <main className="min-h-screen bg-transparent flex flex-col">
      {/* Hero Section */}
      <div className="bg-transparent flex flex-col justify-center items-center text-white pb-20 mt-16">
        <motion.h4
          initial={{ opacity: 0.5, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm font-base mb-8"
        >
          Contributions
        </motion.h4>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Empowering Tomorrow with AI Ecosystems Today
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At CAiRL, we are more than just an AI research hub—we are architects
            of the AI revolution. Our contributions span cutting-edge research,
            ecosystem development, mentorship, and AI-driven social impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Section Template */}
        {[
          {
            id: "leadership",
            title: "AI Research & Thought Leadership",
            description:
              "We curate high-stakes AI hackathons that push the boundaries of problem-solving. Our hackathons:",
            bullets: [
              "Pioneering AI research in Generative AI, Explainable AI, and AI Ethics.",
              "Collaborating with top research institutes to drive fundamental AI advancements.",
              "Publishing AI white papers, frameworks, and best practices for industry adoption.",
            ],
            image:
              "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750324894/research-innovation-img-9_kcezsa.jpg",
          },
          {
            id: "skill-development",
            title: "AI Education & Skill Development",
            description:
              "AI's power lies in people who understand and build it. That's why CAiRL is shaping the next generation of AI innovators through:",
            bullets: [
              "AI Bootcamps & Upskilling Programs – Equipping professionals and students with AI expertise.",
              "AI Curriculum Development – Designing AI learning modules for universities & enterprises.",
              "Industry-Recognized AI Certifications – Ensuring AI skills are job-ready.",
            ],
            image:
              "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750324784/research-innovation-img-8_rtb9vs.jpg",
          },
          {
            id: "patnerships",
            title: "AI Ecosystem Building & Partnerships",
            description:
              "AI progress thrives on collaboration. CAiRL bridges the gap between:",
            bullets: [
              "Government, academia, startups, and enterprises to drive AI adoption.",
              "AI-focused partnerships with research labs, policymakers, and industry pioneers.",
              "Global AI initiatives to set benchmarks in AI regulation and innovation.",
            ],
            image:
              "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750323466/research-innovation-img-2_rg2tqt.jpg",
          },
          {
            id: "hackathons",
            title: "AI Hackathons & Innovation Challenges",
            description:
              "We don't just discuss AI—we build it. CAiRL's hackathons are where:",
            bullets: [
              "Top AI talent solves real-world challenges in healthtech, finance, and sustainability.",
              "Winning solutions receive funding, mentorship, and enterprise partnerships.",
              "Startups get fast-tracked for AI adoption and scale.",
            ],
            image:
              "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750323466/research-innovation-img-3_n0qba0.jpg",
          },
          {
            id: "sustainability",
            title: "AI for Social Good & Sustainability",
            description:
              "AI should not just drive profits—it should drive positive change. CAiRL leads AI initiatives for:",
            bullets: [
              "Climate resilience – AI-driven solutions for agriculture, energy efficiency & sustainability.",
              "AI in public healthcare – Early disease detection, telemedicine, and resource optimization.",
              "Rural AI outreach – Bringing AI-powered education and resources to underprivileged areas.",
            ],
            image:
              "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750324458/research-innovation-img-7_zlyfwb.jpg",
          },
          {
            id: "mentorship",
            title: "AI Mentorship & Startup Support",
            description:
              "We nurture the AI disruptors of tomorrow by offering:",
            bullets: [
              "Mentorship from AI experts, researchers, and industry veterans.",
              "Investor and corporate connects for AI-driven startups.",
              "Access to AI compute resources, datasets, and technical guidance.",
            ],
            image:
              "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750323466/research-innovation-img-6_fklxah.jpg",
          },
        ].map((section, idx) => (
          <div
            key={idx}
            id={section.id} // Added ID here for anchor linking
            className={`flex flex-col items-center lg:items-start ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-12`}
          >
            {/* Image */}
            <div className="flex-1 rounded-xl overflow-hidden max-h-[450px] min-h-[300px]">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 mb-6">{section.description}</p>
              <ul className="space-y-4 mb-6">
                {section.bullets.map((point) => (
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              {/* <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Know more
              </button> */}
            </div>
          </div>
        ))}
      </div>

      <div className="my-28">
        <CTA />
      </div>

      {/* Newsletter Section */}
      <div className="bg-secondary py-24 mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter or follow us online to stay ahead in AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-grow px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResearchAndInnovation;
