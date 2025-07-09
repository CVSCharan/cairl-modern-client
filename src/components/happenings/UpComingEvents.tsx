import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const UpComingEvents = () => {
  const upcomingEvents = [
    {
      id: "ai-in-life-sciences",
      title: "CAIRL Learning Labs - AI in Life Sciences",
      date: "July 4, 2025",
      description:
        "Join us for an insightful session on AI applications in life sciences, featuring industry experts and hands-on learning experiences.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751394883/Role_of_AIML_in_Life_Sciences_-_Raghavendra_f08iaa.png",
      type: "Webinar",
      location: "Virtual",
    },
  ];

  return (
    <div className="bg-secondary">
      {/* Upcoming Events Section */}
      <div
        id="upcoming-events"
        className="max-w-7xl mx-auto flex flex-col justify-center items-center text-foreground py-16 sm:py-20 lg:py-24"
      >
        <motion.h4
          initial={{ opacity: 0.5, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm font-base mb-8"
        >
          Events
        </motion.h4>
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Upcoming Events
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          Stay tuned for our exciting upcoming events, workshops, and
          conferences. We regularly update this section with new opportunities
          to engage with the latest in AI.
        </p>

        <div
          className={`grid ${
            upcomingEvents.length >= 3
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2"
          } gap-8 max-w-5xl mx-auto`}
        >
          {upcomingEvents.map((event) => (
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
    </div>
  );
};

export default UpComingEvents;
