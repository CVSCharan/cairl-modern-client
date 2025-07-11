import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { WebinarsData } from "../../data/Webinar";

const EventsTimeline = () => {
  return (
    <div
      id="timeline"
      className="flex flex-col justify-center items-center text-foreground py-16 sm:py-20 lg:py-24"
    >
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
        Timeline
      </motion.h4>
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Events Timeline
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
        Relive our successful events and explore the knowledge shared by
        industry experts.
      </p>

      <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full">
        {WebinarsData.map((event) => (
          <div
            key={event.id}
            className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden border border-border transition-transform transform hover:-translate-y-1 duration-300 flex flex-col md:flex-row"
          >
            {/* Left Half - Image */}
            <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
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

            {/* Right Half - Details */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {event.title}
                </h3>
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  {event.topic}
                </h4>

                <div className="flex flex-wrap items-center text-muted-foreground text-sm mb-4 gap-x-4 gap-y-2">
                  <div className="flex items-center">
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
                  </div>
                  <div className="flex items-center">
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
                </div>

                <p className="text-muted-foreground text-base mb-4 leading-relaxed">
                  {event.description}
                </p>

                {event.highlights && (
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-primary mb-3">
                      Highlights:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

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
