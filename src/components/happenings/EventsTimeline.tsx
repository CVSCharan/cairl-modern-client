import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const EventsTimeline = () => {
  const pastEvents = [
    {
      id: "ai-in-design",
      title: "CAIRL Learning Labs - AI in Design",
      date: "June 20, 2025",
      description:
        "Exploring how AI is transforming the design industry, from generative design tools to AI-assisted creative processes.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751394494/Design_Meets_AI_Augmentation_-_ep6_s4uwqj.png",
      type: "Webinar",
      location: "Virtual",
      highlights: [
        "Showcase of AI-powered design tools",
        "Case studies from leading design firms",
        "Interactive session on AI-assisted creativity",
        "Ethical considerations in AI-generated design",
      ],
    },
    {
      id: "ai-in-pharma",
      title: "CAIRL Learning Labs - AI in Pharma",
      date: "June 27, 2025",
      description:
        "Exploring AI applications in pharmaceutical research and drug discovery with industry leaders.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751394493/AI_for_Pharma_-_ep7_et1sqw.png",
      type: "Webinar",
      location: "Virtual",
      highlights: [
        "Deep dive into AI-driven drug discovery",
        "Case studies from leading pharma companies",
        "Hands-on session with AI tools for molecular analysis",
      ],
    },
  ];

  return (
    <div
      id="past-events"
      className="flex flex-col justify-center items-center text-foreground py-16 sm:py-20 lg:py-24"
    >
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
        Timeline
      </motion.h4>
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Events Timeline
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
        Relive our successful events and explore the knowledge shared by
        industry experts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {pastEvents.map((event) => (
          <div
            key={event.id}
            className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden border border-border transition-transform transform hover:-translate-y-2 duration-300 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-md">
                  {event.type}
                </span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {event.title}
              </h3>
              <div className="flex items-center text-muted-foreground text-sm mb-4">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>{event.date}</span>
                <span className="mx-2">|</span>
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
                <span>{event.location}</span>
              </div>
              <p className="text-muted-foreground text-base mb-6 flex-grow">
                {event.description}
              </p>
              {event.highlights && (
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-primary mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-primary flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-auto pt-4 border-t border-border">
                <Link to={`/webinar/${event.id}`} className="w-full">
                  <Button variant="default" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTimeline;
