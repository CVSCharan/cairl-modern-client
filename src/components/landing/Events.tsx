import React from "react";
import { Link } from "react-router-dom";

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
    <div className="relative rounded-xl overflow-hidden h-64 group my-16">
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
      <div className="relative z-30 h-full flex flex-col justify-end p-6 text-white">
        <div className="mb-3">
          <span className="text-sm font-bold bg-primary text-primary-foreground px-4 py-2 rounded-full inline-block shadow-xl">
            {type}
          </span>
        </div>
        <div className="text-sm font-bold mb-3 text-white">{date}</div>
        <h3 className="text-2xl font-black mb-3 text-white leading-tight">
          {title}
        </h3>
        <p className="text-white text-sm leading-relaxed">{description}</p>
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
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <a
          href="#about-us"
          className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full"
        >
          Happening
        </a>
        <div className="flex justify-between items-center mt-8 mb-4">
          <h2 className="text-3xl font-bold text-foreground">
            Upcoming Events & Webinar
          </h2>
          <Link
            to="/happenings"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full font-medium flex items-center"
          >
            View All Events
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Events;
