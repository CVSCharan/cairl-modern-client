import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface EventCardProps {
  date: string;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  title,
  type,
  description,
  imageUrl,
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden h-64 group my-4 md:my-16">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overall Dark Overlay for Maximum Text Visibility */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Additional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />

      {/* Content */}
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
      date: "21/December/2023",
      title: "FULL TIME FEETTOF 101",
      type: "Workshop Digital",
      description: "Coding Colloqui: Read Object Programming D Eta Digital",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189047/events-img-3_sm4l4r.jpg",
    },
    {
      date: "2/November/2023",
      title: "Event Digital",
      type: "Workshop Digital",
      description:
        "Supplement Structure: Accelerating The Future of Programming",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189052/events-img-1_jargc1.jpg",
    },
    {
      date: "2/November/2023",
      title: "View all Events",
      type: "Workshop Digital",
      description:
        "Coding Extrated Netrollable Transformed Texture Colors Darts Temperature gain Fireweight Levels",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189053/events-img-2_nreecn.jpg",
    },
  ];

  return (
    <section className="bg-transparent min-h-screen w-full flex flex-col justify-center items-center">
      <div className="bg-secondary h-full w-full py-4 md:py-6 px-4 rounded-3xl max-w-6xl mx-auto flex flex-col items-center">
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
          Happening
        </motion.h4>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-0 text-center">
          Upcoming Events & Webinar
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
