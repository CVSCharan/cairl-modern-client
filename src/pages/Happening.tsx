import { useEffect } from "react";
import { motion } from "framer-motion";

const Happening = () => {
  useEffect(() => {
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.hash
        );
      }
    }
  }, []);

  const upcomingEvents = [
    {
      title: "CAIRL Learning Labs - AI in Life Sciences",
      date: "July 4, 2025",
      description:
        "Join us for an insightful session on AI applications in life sciences, featuring industry experts and hands-on learning experiences.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751228905/UpComing_Event_-_04th_July_25_ejuccu.jpg",
      type: "Workshop",
      location: "Virtual",
    },
  ];

  const pastEvents = [
    {
      title: "CAIRL Learning Labs - AI in Design",
      date: "June 20, 2025",
      description:
        "Exploring how AI is transforming the design industry, from generative design tools to AI-assisted creative processes.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751228906/events_img_-_20th_june_25_fyooj3.jpg",
      type: "Workshop",
      location: "Virtual",
      highlights: [
        "Showcase of AI-powered design tools",
        "Case studies from leading design firms",
        "Interactive session on AI-assisted creativity",
        "Ethical considerations in AI-generated design",
      ],
    },
    {
      title: "CAIRL Learning Labs - AI in Pharma",
      date: "June 27, 2025",
      description:
        "Exploring AI applications in pharmaceutical research and drug discovery with industry leaders.",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751228905/events_img_-_27th_june_25_j5opqh.jpg",
      type: "Workshop",
      location: "Virtual",
      highlights: [
        "Deep dive into AI-driven drug discovery",
        "Case studies from leading pharma companies",
        "Hands-on session with AI tools for molecular analysis",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-foreground py-16 sm:py-20 lg:py-24">
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
          Happenings
        </motion.h4>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-foreground font-bold mb-8">
            Happenings at CAiRL
          </h1>
          <p className="text-lg sm:text-xl max-w-xl md:max-w-3xl mx-auto text-muted-foreground">
            AI is an ever-evolving field, and at CAiRL, we ensure you stay ahead
            of the curve. Our events, webinars, and visual journeys bring
            together the brightest minds, groundbreaking innovations, and
            real-world impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Events Section */}
        <div
          id="events"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Events</h2>
            <p className="text-muted-foreground mb-6">
              CAiRL hosts and collaborates on high-impact AI events that bring
              together:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">
                  Global AI Leaders – Experts from industry, academia, and
                  government.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">
                  Innovators & Researchers – Pioneering breakthroughs in AI.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">
                  Startups & Enterprises – Scaling AI adoption across
                  industries.
                </span>
              </li>
            </ul>
            <p className="font-semibold text-muted-foreground mb-4">
              Why it Matters: CAiRL's events shape AI conversations and ignite
              industry collaboration.
            </p>
          </div>
          <div className="rounded-xl h-full min-h-[300px] overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750262916/happenings-events-card-img_fjbkec.png"
              alt="CAiRL Events"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Webinars Section */}
        <div
          id="webinars"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20"
        >
          <div className="order-last lg:order-first rounded-xl h-full min-h-[300px] overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750262924/happenings-webinar-card-img_othucx.jpg"
              alt="CAiRL Webinars"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Webinars</h2>
            <p className="text-muted-foreground mb-6">
              Our webinars provide on-demand AI expertise from world-class
              speakers:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">
                  Exclusive Fireside Chats – Conversations with AI pioneers.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">
                  Live Demos & Workshops – Deep dives into AI applications.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">
                  Expert Panels – Discussing AI trends, regulations, and
                  innovations.
                </span>
              </li>
            </ul>
            <p className="font-semibold text-muted-foreground mb-4">
              Why it Matters: Stay ahead with AI insights from global experts.
            </p>
          </div>
        </div>

        {/* Visual Journey Section */}
        <div
          id="visual-journey"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Visual Journey
            </h2>
            <p className="text-muted-foreground mb-6">
              A picture speaks a thousand words—our Visual Journey captures the
              milestones, achievements, and impact of CAiRL.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">
                  Awards & Recognitions – Honouring our contributions to AI
                  innovation.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">
                  Achiever's Journey – Showcasing winners of CAiRL Hackathons &
                  Challenges.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">
                  Event Highlights – A glimpse into our summits, conferences,
                  and AI bootcamps.
                </span>
              </li>
            </ul>
            <p className="font-semibold text-muted-foreground mb-4">
              Explore our journey through images & videos – See how CAiRL is
              shaping AI's future!
            </p>
          </div>
          <div className="rounded-xl h-full max-h-[450px] overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750262917/happenings-visual-journey-card-img_ppw12b.jpg"
              alt="CAiRL Visual Journey"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        {/* Upcoming Events Section */}
        <div
          id="upcoming-events"
          className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center text-foreground py-16 sm:py-20 lg:py-24"
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
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/80">{event.date}</span>
                    <span className="text-primary font-medium">
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Events Section */}
      <div
        id="past-events"
        className="min-h-screen flex flex-col justify-center items-center text-foreground py-16 sm:py-20 lg:py-24"
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
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {event.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-primary mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1 h-1 mt-2 mr-2 bg-primary rounded-full flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/80">{event.date}</span>
                  <span className="text-primary font-medium">
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-secondary py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Stay Informed with Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates on upcoming events, research
            breakthroughs, and AI industry insights directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-grow px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap shadow-md hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Happening;
