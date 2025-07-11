import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { WebinarsData } from "../data/Webinar";
import type { Webinar } from "../types/webinar";
import CTA from "../components/CTA";
import NewsLetters from "../components/NewsLetters";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WebinarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [webinar, setWebinar] = useState<Webinar | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      const currentWebinar = WebinarsData.find((w) => w.id === id) || null;
      setWebinar(currentWebinar);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center bg-card p-12 rounded-lg shadow-lg max-w-md border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Webinar Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            The webinar you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/happenings">
            <Button variant="outline" className="px-6 py-3 font-semibold">
              Return to Happenings
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              {webinar.type}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
            >
              {webinar.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              {webinar.topic}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {webinar.videoUrl && (
                <motion.div
                  className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.8 }}
                >
                  <div className="aspect-w-16 aspect-h-8">
                    <iframe
                      src={webinar.videoUrl}
                      title="Webinar Video Player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </motion.div>
              )}
              <motion.div
                className="bg-card rounded-2xl shadow-xl p-8 border border-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About This Webinar
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {webinar.aboutWebinar}
                </p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-8 sticky top-8">
              {webinar.speaker && (
                <motion.div
                  className="bg-card rounded-2xl shadow-xl p-6 border border-border"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={webinar.speaker.imageUrl}
                      alt={webinar.speaker.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <p className="text-foreground font-bold text-lg">
                        {webinar.speaker.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {webinar.speaker.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      <span>{webinar.location}</span>
                    </div>
                  </div>
                </motion.div>
              )}
              {webinar.highlights && (
                <motion.div
                  className="bg-card rounded-2xl shadow-xl p-6 border border-border"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    {webinar.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="w-3 h-3 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
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

export default WebinarDetails;
