import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import CTA from "../components/CTA";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MOU = () => {
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

  const partnerships = [
    {
      title: "MoU with T-Hub MATH",
      logos: [
        // Changed from 'logo' to 'logos' array for multiple images
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751533928/mou-t-hub-img_bejzwv.png",
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751533928/mou-math-img_ipalc4.png",
      ],
      alt: ["T-Hub logo", "MATH logo"], // Array of alt texts
      sections: [
        {
          title: "About T-Hub MATH",
          content:
            "T-Hub MATH (Machine Learning and AI Technology Hub) is a flagship AI innovation ecosystem established by T-Hub and the Department of Science & Technology, Government of India. It supports deeptech startups, facilitates AI research, and fosters strategic industry collaboration.",
        },
        {
          title: "CAiRL's Strategic Partnership",
          content:
            "Our MoU with T-Hub MATH enables CAiRL to co-create an innovation-driven environment for AI startups and researchers. We collaborate on hackathons, CoE development, and mentorship programs. This partnership amplifies our mission to accelerate ethical, real-world AI adoption and nurtures the next generation of AI leaders.",
        },
      ],
      cta: {
        text: "Want to co-host innovation challenges or access incubation support?",
        button: "Partner with CAiRL",
      },
      reverse: true,
    },
    {
      title: "MoU with FABA (Federation of Asian Biotech Associations)",
      logo: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751533928/mou-faba-img_yjuoqq.png",
      alt: "FABA collaboration",
      sections: [
        {
          title: "About FABA",
          content:
            "FABA is a pioneering platform advancing biotechnology, healthcare, and life sciences through multi-stakeholder collaboration. With global reach and scientific depth, FABA is committed to accelerating research-led innovation in the bioeconomy.",
        },
        {
          title: "CAiRL's Strategic Partnership",
          content:
            "CAiRL's partnership with FABA positions us at the intersection of AI and biotech innovation. Together, we're exploring AI applications in genomics, drug discovery, and clinical diagnostics. This collaboration fuels our 1000+ AI Use Cases in Life Sciences initiative, and helps design AI training programs aligned with biopharma needs.",
        },
      ],
      cta: {
        text: "Are you building AI in life sciences? Let's co-create the future.",
        button: "Join Our Research Network",
      },
      reverse: false,
    },
    {
      title: "Academic Institutions",
      logo: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1715858368/academic-institutions-logo_yq5k6e.png",
      alt: "Academic Institutions collaboration",
      sections: [
        {
          title: "CAiRL's Academic Engagement Model",
          content:
            "We co-develop AI curricula, drive interdisciplinary research, and support PhD projects. Our AI Bootcamps, Faculty Development Programs, and AI Fridays enable universities to integrate responsible AI into core learning. This collaboration also connects students with real-world industry challenges through hackathons and innovation labs.",
        },
        {
          title: "About the Collaboration",
          content:
            "CAiRL partners with leading academic institutions such as IIT Hyderabad, IIIT Hyderabad, and other top universities to strengthen India's AI education and research backbone.",
        },
      ],
      cta: {
        text: "If you're an educator or researcher looking to scale your AI impact, CAiRL is your platform.",
        button: "Collaborate with Us",
      },
      reverse: true,
    },
    {
      title: "Government Engagements",
      logo: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751533929/mou-govt-img_gbxjej.png",
      alt: "Government Engagements",
      sections: [
        {
          title: "About the Engagement",
          content:
            "CAiRL works closely with the Telangana Government and national agencies to align AI innovation with public policy, digital transformation, and societal development.",
        },
        {
          title: "Driving AI for Public Good",
          content:
            "From policy co-creation, ethics-driven frameworks, to grassroots applications in agri-tech and health-tech, CAiRL enables government bodies to harness AI responsibly. Our access to public datasets, like Telangana's ADEx platform, and our focus on AI for Social Good make CAiRL a trusted enabler of impact-first AI programs.",
        },
      ],
      cta: {
        text: "Are you a policymaker or public agency exploring AI?",
        button: "Partner with CAiRL",
      },
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
              MoUs & Strategic Partnerships
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Collaborating with leading institutions to shape the future of
              responsible AI in India.
            </p>
          </div>

          <div id="partnerships" className="space-y-16 md:space-y-24">
            {partnerships.map((p, index) => (
              <motion.div
                key={index}
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
                    {/* Conditional rendering for multiple logos */}
                    <div className="bg-background/50 rounded-xl h-full flex items-center justify-center p-6">
                      {Array.isArray(p.logos) ? (
                        <div className="flex flex-col items-center justify-center gap-8 p-4 h-full w-full">
                          {p.logos.map((logo, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-center w-full"
                            >
                              <img
                                className="max-h-40 w-auto object-contain my-3 transition-all hover:scale-105"
                                src={logo}
                                alt={Array.isArray(p.alt) ? p.alt[i] : p.alt}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <img
                          className="max-h-60 w-auto object-contain p-4 transition-all hover:scale-105"
                          src={p.logo}
                          alt={typeof p.alt === "string" ? p.alt : p.alt[0]}
                        />
                      )}
                    </div>
                  </div>

                  <div className="p-8 md:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      {p.title}
                    </h2>
                    <div className="space-y-6">
                      {p.sections.map((s, i) => (
                        <div key={i}>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {s.title}
                          </h3>
                          <p className="text-muted-foreground">{s.content}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 bg-secondary p-4 rounded-lg border border-border">
                      <p className="italic text-secondary-foreground">
                        {p.cta.text}
                      </p>
                    </div>
                    <Button variant="default" className="mt-6" size="lg">
                      {p.cta.button}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            id="why-partnerships-matter"
            className="mt-24 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why These Partnerships Matter
            </h2>
            <p className="text-lg mt-4 text-muted-foreground max-w-4xl mx-auto">
              These MoUs and strategic collaborations are not just symbolic —
              they form the backbone of CAiRL's mission to build India's most
              ethical, inclusive, and scalable AI ecosystem. By working with
              leaders across innovation, research, and governance, we enable
              meaningful, measurable outcomes that benefit both society and the
              economy.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="my-28">
        <CTA />
      </div>

      {/* Newsletter Section */}
      <div className="bg-secondary py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
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

export default MOU;
