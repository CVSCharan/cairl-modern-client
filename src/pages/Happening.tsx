import { useEffect } from "react";
import { motion } from "framer-motion";
import NewsLetters from "../components/NewsLetters";
import UpComingEvents from "../components/happenings/UpComingEvents";
import EventsTimeline from "../components/happenings/EventsTimeline";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Happening = () => {
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

  const happeningSections = [
    {
      id: "events",
      title: "Events",
      description:
        "CAiRL hosts and collaborates on high-impact AI events that bring together:",
      bullets: [
        "Global AI Leaders – Experts from industry, academia, and government.",
        "Innovators & Researchers – Pioneering breakthroughs in AI.",
        "Startups & Enterprises – Scaling AI adoption across industries.",
      ],
      ctaText:
        "Why it Matters: CAiRL's events shape AI conversations and ignite industry collaboration.",
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751395981/Happenings_-_Events_Img_ksqjxa.png",
      reverse: false,
    },
    {
      id: "webinars",
      title: "Webinars",
      description:
        "Our webinars provide on-demand AI expertise from world-class speakers:",
      bullets: [
        "Exclusive Fireside Chats – Conversations with AI pioneers.",
        "Live Demos & Workshops – Deep dives into AI applications.",
        "Expert Panels – Discussing AI trends, regulations, and innovations.",
      ],
      ctaText:
        "Why it Matters: Stay ahead with AI insights from global experts.",
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751395981/Happenings_-_Weinars_img_w5mtqm.png",
      reverse: true,
    },
    {
      id: "visual-journey",
      title: "Visual Journey",
      description:
        "A picture speaks a thousand words—our Visual Journey captures the milestones, achievements, and impact of CAiRL.",
      bullets: [
        "Awards & Recognitions – Honouring our contributions to AI innovation.",
        "Achiever's Journey – Showcasing winners of CAiRL Hackathons & Challenges.",
        "Event Highlights – A glimpse into our summits, conferences, and AI bootcamps.",
      ],
      ctaText:
        "Explore our journey through images & videos – See how CAiRL is shaping AI's future!",
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750262917/happenings-visual-journey-card-img_ppw12b.jpg",
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
              initial={{ opacity: 0.5, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              Happenings
            </motion.h4>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Happenings at CAiRL
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              AI is an ever-evolving field, and at CAiRL, we ensure you stay
              ahead of the curve. Our events, webinars, and visual journeys
              bring together the brightest minds, groundbreaking innovations,
              and real-world impact.
            </p>
          </div>

          <div id="partnerships" className="space-y-16 md:space-y-24">
            {happeningSections.map((p, index) => (
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
                    <ul className="space-y-3 mb-6">
                      {p.bullets.map((s, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">{s}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 bg-secondary p-4 rounded-lg border border-border">
                      <p className="italic text-secondary-foreground">
                        {p.ctaText}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <UpComingEvents />
      </div>

      {/* Events Timeline Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <EventsTimeline />
      </div>

      <NewsLetters />
    </main>
  );
};

export default Happening;
