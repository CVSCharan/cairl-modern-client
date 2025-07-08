import { useEffect } from "react";
import { motion } from "framer-motion";

const WhitePapers = () => {
  useEffect(() => {
    // Disable scroll restoration so we can manually control it
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 100); // small delay to ensure DOM is rendered
  }, []);

  return (
    <main className="min-h-screen bg-transparent flex flex-col">
      {/* Hero Section */}
      <div className="bg-transparent flex flex-col justify-center items-center pb-20 mt-8">
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
          White Papers
        </motion.h4>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            CAiRL - White Papers
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Read through these AI case studies to see how we've helped other
            companies achieve their business goals.
          </p>
        </div>
      </div>

      {/* White Papers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* White Paper 1 */}
          <div className="bg-secondary rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750793938/white-papers-card-img-1_bytuvi.png"
                alt="Training a Voice Assistant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-foreground font-semibold mb-2">
                White Papers
              </h4>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Training a Voice Assistant
              </h3>
              <p className="text-muted-foreground mb-6">
                A cutting edge voice assistant is foundational to enhancing
                customer experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-foreground/10 text-white px-3 py-1 rounded-full text-sm">
                  NLP
                </span>
                <span className="bg-foreground/10 text-white px-3 py-1 rounded-full text-sm">
                  Scripted Speech
                </span>
              </div>
              <a
                href="/white-papers/training-a-voice-assistant"
                className="text-foreground font-medium hover:underline inline-flex items-center"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* White Paper 2 */}
          <div className="bg-secondary rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750793939/white-papers-card-img-2_bv6xdm.png"
                alt="Towards Universally Ethical AI"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-foreground font-semibold mb-2">
                White Papers
              </h4>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Towards Universally Ethical AI
              </h3>
              <p className="text-muted-foreground mb-6">
                A manifesto about our transition from a software world to an
                Ethical AI one, and the important considerations to keep in
                mind.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm">
                  Healthcare
                </span>
                <span className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm">
                  Ethical AI
                </span>
                <span className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm">
                  Customer Care
                </span>
                <span className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm">
                  Speech
                </span>
              </div>
              <a
                href="/white-papers/towards-universally-ethical-ai"
                className="text-foreground font-medium hover:underline inline-flex items-center"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* White Paper 3 */}
          <div className="bg-secondary rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750793938/white-papers-card-img-3_qaymkr.png"
                alt="Testing Networks Built for and Enhanced with AI"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-foreground font-semibold mb-2">
                White Papers
              </h4>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Testing Networks Built for and Enhanced with AI
              </h3>
              <p className="text-muted-foreground mb-6">
                AI is transforming networks, driving demand for high-bandwidth,
                low-latency, and lossless performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm">
                  Networking
                </span>
                <span className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm">
                  AI-Ready
                </span>
                <span className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm">
                  Scalability
                </span>
              </div>
              <a
                href="/white-papers/testing-networks-built-for-and-enhanced-with-ai"
                className="text-foreground font-medium hover:underline inline-flex items-center"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
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

export default WhitePapers;
