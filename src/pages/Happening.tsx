import { useEffect } from "react";

const Happening = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const elementId = window.location.hash.substring(1);
      // Find the element by ID
      const element = document.getElementById(elementId);

      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL without jumping (optional)
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.hash
        );
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-foreground pb-16 pt-8">
        <h4 className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm font-base mb-8">
          Happenings
        </h4>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl text-foreground font-bold mb-8">
            Happenings at CAiRL
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#005BA9] mb-6">Events</h2>
            <p className="text-gray-700 mb-6">
              CAiRL hosts and collaborates on high-impact AI events that bring
              together:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Global AI Leaders – Experts from industry, academia, and
                  government.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Innovators & Researchers – Pioneering breakthroughs in AI.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Startups & Enterprises – Scaling AI adoption across
                  industries.
                </span>
              </li>
            </ul>
            <p className="font-semibold text-gray-700 mb-4">
              Why it Matters: CAiRL's events shape AI conversations and ignite
              industry collaboration.
            </p>
            <a
              href="/events"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Know more
            </a>
          </div>
          <div className="rounded-xl h-full min-h-[300px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750262916/happenings-events-card-img_fjbkec.png"
              alt="CAiRL Events"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Webinars Section */}
        <div
          id="webinars"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="order-last lg:order-first rounded-xl h-full min-h-[300px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750262924/happenings-webinar-card-img_othucx.jpg"
              alt="CAiRL Webinars"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Webinars</h2>
            <p className="text-gray-700 mb-6">
              Our webinars provide on-demand AI expertise from world-class
              speakers:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Exclusive Fireside Chats – Conversations with AI pioneers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Live Demos & Workshops – Deep dives into AI applications.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Expert Panels – Discussing AI trends, regulations, and
                  innovations.
                </span>
              </li>
            </ul>
            <p className="font-semibold text-gray-700 mb-4">
              Why it Matters: Stay ahead with AI insights from global experts.
            </p>
            <a
              href="/webinars"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Know more
            </a>
          </div>
        </div>

        {/* Visual Journey Section */}
        <div
          id="visual-journey"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Visual Journey
            </h2>
            <p className="text-gray-700 mb-6">
              A picture speaks a thousand words—our Visual Journey captures the
              milestones, achievements, and impact of CAiRL.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Awards & Recognitions – Honouring our contributions to AI
                  innovation.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Achiever's Journey – Showcasing winners of CAiRL Hackathons &
                  Challenges.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Event Highlights – A glimpse into our summits, conferences,
                  and AI bootcamps.
                </span>
              </li>
            </ul>
            <p className="font-semibold text-gray-700 mb-4">
              Explore our journey through images & videos – See how CAiRL is
              shaping AI's future!
            </p>
            <a
              href="/visual-journey"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Know more
            </a>
          </div>
          <div className="rounded-xl h-full max-h-[450px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750262917/happenings-visual-journey-card-img_ppw12b.jpg"
              alt="CAiRL Visual Journey"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-secondary py-24 mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter or follow us online to stay ahead in AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-grow px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Happening;
