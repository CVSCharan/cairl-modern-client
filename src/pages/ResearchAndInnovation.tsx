import { useEffect } from "react";
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import NewsLetters from "../components/NewsLetters";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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

  const researchSections = [
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
      reverse: true,
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
      reverse: false,
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
      reverse: true,
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
      reverse: false,
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
      reverse: true,
    },
    {
      id: "mentorship",
      title: "AI Mentorship & Startup Support",
      description: "We nurture the AI disruptors of tomorrow by offering:",
      bullets: [
        "Mentorship from AI experts, researchers, and industry veterans.",
        "Investor and corporate connects for AI-driven startups.",
        "Access to AI compute resources, datasets, and technical guidance.",
      ],
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750323466/research-innovation-img-6_fklxah.jpg",
      reverse: false,
    },
  ];

  return (
    <main className="min-h-screen bg-background isolate">
      <div className="relative w-full">
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-35 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750381598/Element-1_tsbawm.png"
            alt="Background Element"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 pb-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h4
              initial={{ opacity: 0.5, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full mb-8"
            >
              Contributions
            </motion.h4>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Research & Innovation
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              At CAiRL, we are more than just an AI research hub—we are
              architects of the AI revolution. Our contributions span
              cutting-edge research, ecosystem development, mentorship, and
              AI-driven social impact.
            </p>
          </div>

          <div id="research-areas" className="space-y-16 md:space-y-24">
            {researchSections.map((p, index) => (
              <motion.div
                key={index}
                id={p.id}
                className={`bg-card rounded-2xl shadow-xl overflow-hidden border border-border`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center ${
                    p.reverse ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`md:col-span-1 ${
                      p.reverse ? "md:col-start-3" : ""
                    }`}
                  >
                    <div className="bg-background/50 rounded-xl h-full flex items-center justify-center p-6">
                      <img
                        className="max-h-80 w-auto object-contain p-4 transition-all hover:scale-105"
                        src={p.image}
                        alt={p.title}
                      />
                    </div>
                  </div>

                  <div className="p-8 md:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      {p.title}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          {p.description}
                        </p>
                        <ul className="space-y-4 mb-6">
                          {p.bullets.map((point, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            id="why-it-matters"
            className="mt-24 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Our Research Matters
            </h2>
            <p className="text-lg mt-4 text-muted-foreground max-w-4xl mx-auto">
              Our research and innovation initiatives are designed to create a
              tangible impact. We focus on solving real-world problems,
              fostering a new generation of AI talent, and building a
              collaborative ecosystem that accelerates the adoption of ethical
              and responsible AI across industries.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Cutting-Edge Research
                </h4>
                <p className="text-muted-foreground">
                  Advancing the frontiers of AI with a focus on ethical and
                  impactful solutions.
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Ecosystem Development
                </h4>
                <p className="text-muted-foreground">
                  Building a collaborative network of academia, industry, and
                  government.
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Social Impact
                </h4>
                <p className="text-muted-foreground">
                  Applying AI to solve critical challenges in sustainability,
                  healthcare, and more.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="my-28">
        <CTA />
      </div>

      {/* Newsletter Section */}
      <NewsLetters />
    </main>
  );
};

export default ResearchAndInnovation;
