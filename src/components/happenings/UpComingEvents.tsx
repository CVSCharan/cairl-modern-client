import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const UpComingEvents = () => {
  const upcomingEvents = [
    {
      id: "ai-in-life-sciences",
      title: "CAIRL Learning Labs - AI in Life Sciences",
      date: "July 4, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual Event",
      description:
        "Join us for an insightful session on AI applications in life sciences, featuring industry experts and hands-on learning experiences.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751228905/UpComing_Event_-_04th_July_25_ejuccu.jpg",
      type: "Webinar",
      highlights: [
        "Expert-led sessions on AI in genomics",
        "Interactive workshops and demos",
        "Networking with industry professionals",
        "Latest research presentations",
      ],
      regiterLink: "https://forms.gle/v6pEMcCbcgHeDJjx8",
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
          initial={{ opacity: 0.5, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="inline-block px-6 py-3 rounded-full bg-background/70 text-primary text-sm font-medium mb-6 border border-primary/20"
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

        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Event Details */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">
                        What to Expect:
                      </h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a
                        href={event.regiterLink}
                        target="_blank"
                        className="bg-secondary text-foreground hover:bg-primary/90 hover:text-secondary px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 group/btn w-fit"
                      >
                        Register
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
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
