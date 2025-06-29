import React from "react";

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
    // MODIFIED: Added w-full and max-w-sm to control card size
    <div className="relative rounded-xl overflow-hidden h-64 group my-4 md:my-16 w-full max-w-sm">
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

export default EventCard;
