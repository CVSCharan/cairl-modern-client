import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Assuming EventCard is imported from its file
// import EventCard from "./EventCard";

interface EventCardProps {
  date: string;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
}

// NOTE: The EventCard component is included here for context,
// but you should have it in its own file.
const EventCard: React.FC<EventCardProps> = ({
  date,
  title,
  type,
  description,
  imageUrl,
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden h-64 group my-4 md:my-16 w-full max-w-sm">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
      <div className="relative z-30 h-full flex flex-col justify-end p-4 md:p-6 text-white">
        <div className="mb-2 md:mb-3">
          <span className="text-xs md:text-sm font-bold bg-primary text-primary-foreground px-3 py-1 md:px-4 md:py-2 rounded-full inline-block shadow-xl">
            {type}
          </span>
        </div>
        <div className="text-xs md:text-sm font-bold mb-2 md:mb-3 text-white">
          {date}
        </div>
        <h3 className="text-lg md:text-2xl font-black mb-2 md:mb-3 text-white leading-tight">
          {title}
        </h3>
        <p className="text-white text-xs md:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const events = [
    {
      date: "04/July/2025",
      title: "CAIRL Learning Labs: AI in Life Sciences",
      type: "Event",
      description:
        "Join us for an exciting event focused on AI applications in genomics, drug discovery, and diagnostics.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751228905/UpComing_Event_-_04th_July_25_ejuccu.jpg",
    },
    // Add a second event to see how they align side-by-side
    // {
    //   date: "15/August/2025",
    //   title: "Advanced AI Symposium",
    //   type: "Symposium",
    //   description: "A deep dive into the latest advancements in machine learning models and applications.",
    //   imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189052/events-img-1_jargc1.jpg",
    // },
  ];

  return (
    <section className="bg-transparent w-full flex flex-col justify-center items-center">
      <div className="bg-secondary h-full w-full py-10 md:py-14 px-6 md:px-10 rounded-3xl max-w-6xl mx-auto flex flex-col items-center">
        <motion.h4
          initial={{ opacity: 0.5, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm md:text-base font-medium mb-8"
        >
          Happenings
        </motion.h4>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-0 text-center">
          Upcoming Events & Webinars
        </h2>

        {/* MODIFIED: Replaced grid with a flex container to center the cards */}
        <div className="w-full flex flex-wrap justify-center items-center gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              title={event.title}
              type={event.type}
              description={event.description}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>

        <div className="w-full flex justify-center my-6">
          <Link
            to="/happenings"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full font-medium flex items-center text-sm md:text-base"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
