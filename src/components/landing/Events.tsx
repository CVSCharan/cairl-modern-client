import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Events: React.FC = () => {
  const featuredEvent = {
    date: "04/July/2025",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual Event",
    title: "CAIRL Learning Labs: AI in Life Sciences",
    type: "Featured Event",
    description:
      "Join us for an exciting event focused on AI applications in genomics, drug discovery, and diagnostics. Connect with industry leaders and discover cutting-edge innovations.",
    imageUrl:
      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751228905/UpComing_Event_-_04th_July_25_ejuccu.jpg",
    highlights: [
      "Expert-led sessions on AI in genomics",
      "Interactive workshops and demos",
      "Networking with industry professionals",
      "Latest research presentations",
    ],
  };

  return (
    <section className="bg-transparent min-h-screen w-full flex flex-col justify-center items-center py-16">
      <div className="bg-secondary/50 backdrop-blur-sm border border-border/50 h-full w-full py-12 px-6 rounded-3xl max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 rounded-full bg-background/70 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            Happenings
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
          >
            Upcoming Events
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Don't miss our featured event - join us for an immersive experience
            in AI innovation
          </motion.p>
        </div>

        {/* Featured Event Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img
                  src={featuredEvent.imageUrl}
                  alt={featuredEvent.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {featuredEvent.type}
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
                      <span className="font-medium">{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium">{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-medium">
                        {featuredEvent.location}
                      </span>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      {featuredEvent.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {featuredEvent.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">
                      What to Expect:
                    </h4>
                    <ul className="space-y-2">
                      {featuredEvent.highlights.map((highlight, index) => (
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
                    <button className="bg-secondary text-foreground hover:bg-primary/90 hover:text-secondary px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 group/btn">
                      Register Now
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Events Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/happenings"
            className="bg-foreground border border-border text-background hover:bg-foreground/80 px-8 py-4 rounded-full font-semibold flex items-center gap-3 mx-auto transition-all duration-300 group/all shadow-lg hover:shadow-xl"
          >
            View All Events & Webinars
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/all:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
