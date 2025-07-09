import { useEffect } from "react";
import { motion } from "framer-motion";
import NewsLetters from "../components/NewsLetters";
import CTA from "../components/CTA";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Resources = () => {
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

  const resourceSections = [
    {
      id: "ai-use-case",
      title: "AI Use Cases & Implementation",
      description:
        "Real-world success stories, case studies & sector-specific guides showcasing AI in action—across:",
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750789703/resources-img-1_gg2dsv.png",
      tags: [
        "Healthcare",
        "Lifesciences",
        "Education",
        "Agriculture",
        "Finance",
        "Energy",
        "Biotech (with 1000+ mapped use cases)",
      ],
      reverse: false,
    },
    {
      id: "datasets",
      title: "Datasets for Innovation",
      description: "Tap into curated, AI-ready datasets:",
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750789703/resources-img-2_cwcxni.png",
      bullets: [
        "ADEx (Telangana Agriculture Database)",
        "Sector-Specific Datasets: Healthcare, Energy, Finance & more.",
      ],
      ctaText:
        "**Access is free or low-cost under a sustainable subscription model.",
      reverse: true,
    },
    {
      id: "affordable-ai-computing",
      title: "Affordable AI Computing",
      description: "Accelerate AI development with cloud access via:",
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750789704/resources-img-3_dihgt8.png",
      bullets: ["Microsoft Azure AI", "AWS AI/ML Services", "NVIDIA AI Cloud"],
      ctaText:
        "**Discounted access for social good projects\n**Managed by CAiRL’s non-profit model to ensure sustainability",
      reverse: false,
    },
  ];

  return (
    <main className="min-h-screen bg-background isolate">
      <div className="relative w-full mb-24">
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
              Resources
            </motion.h4>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Resources at CAiRL
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Fueling Innovation with Knowledge, Tools & Infrastructure. At
              CAiRL, we empower the AI ecosystem with curated content, datasets,
              computing power, and thought leadership—designed for researchers,
              startups, enterprises, and policymakers.
            </p>
          </div>

          <div id="resource-sections" className="space-y-16 md:space-y-24">
            {resourceSections.map((p, index) => (
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
                    <p className="text-muted-foreground mb-4">
                      {p.description}
                    </p>
                    {p.bullets && (
                      <ul className="space-y-3 mb-6">
                        {p.bullets.map((s, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-muted-foreground">{s}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {p.tags && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {p.tags.map((domain, idx) => (
                          <span
                            key={idx}
                            className="border bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm"
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
                    )}
                    {p.ctaText && (
                      <div className="mt-8 bg-secondary p-4 rounded-lg border border-border whitespace-pre-line">
                        <p className="italic text-secondary-foreground">
                          {p.ctaText}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <CTA />
      </div>
      
      <NewsLetters />
    </main>
  );
};

export default Resources;
