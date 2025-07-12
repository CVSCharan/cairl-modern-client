import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import SEOMetadata from "../components/seo/SEOMetadata";

const VisualJourney = () => {
  const eventImages = [
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750558967/visual-journey-card-img-1_mi8j2g.png",
    // Add more image URLs here
  ];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? eventImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === eventImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="relative min-h-screen bg-background flex flex-col">
      <SEOMetadata
        title="CAiRL Visual Journey - Awards, Hackathons, and Event Highlights"
        description="Explore the visual journey of CAiRL, showcasing our awards, hackathon winners, and highlights from our key events and conferences."
        keywords="CAiRL visual journey, AI awards, hackathon winners, AI event highlights, CAiRL achievements"
        ogTitle="CAiRL Visual Journey - Awards, Hackathons, and Event Highlights"
        ogDescription="Explore the visual journey of CAiRL, showcasing our awards, hackathon winners, and highlights from our key events and conferences."
        ogImage={eventImages[0]}
        ogUrl={window.location.href}
        twitterTitle="CAiRL Visual Journey - Awards, Hackathons, and Event Highlights"
        twitterDescription="Explore the visual journey of CAiRL, showcasing our awards, hackathon winners, and highlights from our key events and conferences."
        twitterImage={eventImages[0]}
      />
      <div className="relative w-full">
        {/* Background Element - Now covers header to form */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-55 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750554423/Topology-1_bphtdf.png"
            alt="Background Element"
            className="absolute top-0 left-0 min-w-[400px] min-h-[400px] object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20 pt-8">
          {/* Page Heading */}
          <div className="text-center flex flex-col items-center mb-12">
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
              Visual Journey
            </motion.h4>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Awards & Recognitions
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Honouring our contributions to AI Innovation.
            </p>
          </div>

          <div className="py-8 mt-16">
            {/* Excellence Awards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-secondary rounded-xl shadow-md px-6 py-8 text-center flex flex-col items-center"
                >
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750558622/visual-journey-award-img_qvfbkr.png"
                    alt="Award"
                    className="w-[150px] h-[220px] object-contain mb-6"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Excellence in Ethical <br /> AI Practices
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    This award is not just a testament to CAiRL’s mission; it is
                    a call to action—a responsibility to push forward in shaping
                    Hyderabad and India into a global force for applied and
                    ethical AI.
                  </p>
                </div>
              ))}
            </div>

            {/* Hackathon Winner Section */}
            <section
              className="my-26 py-12 px-4 md:px-12 rounded-xl"
              style={{
                background:
                  "linear-gradient(165.68deg, #001425 0%, #003567 50%, #0055A8 100%)",
              }}
            >
              <div className="max-w-7xl mx-auto text-center mb-16">
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
                  Winners
                </motion.h4>
                <h2 className="text-4xl font-bold text-white">
                  Hackathon Winners
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
                {/* 1st Place Card */}
                <div className="relative transform rotate-2">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[300px]">
                    <img
                      src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750558947/visual-journey-hackathon-img-1_os0he5.png"
                      alt="1st Place"
                      className="w-full object-cover h-[220px]"
                    />
                    <div className="p-4 text-left">
                      <h4 className="font-bold text-lg text-black mb-1">
                        Current
                      </h4>
                      <p className="text-sm text-gray-600">
                        A career guidance platform for teenagers and parents. It
                        provides up-to-date information about the labor market,
                        training, internship, and practice opportunities, as
                        well as a gamified algorithm to help with career choice.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-[-20px] right-[-20px] bg-white text-black font-bold w-20 h-20 flex items-center justify-center rounded-full border-2 border-black shadow-md text-sm text-center">
                    1st
                    <br />
                    Place
                  </div>
                </div>

                {/* 3rd Place Card */}
                <div className="relative transform -rotate-2">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[300px]">
                    <img
                      src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750558947/visual-journey-hackathon-img-3_p0oucg.png"
                      alt="3rd Place"
                      className="w-full object-cover h-[220px]"
                    />
                    <div className="p-4 text-left">
                      <h4 className="font-bold text-lg text-black mb-1">
                        Current
                      </h4>
                      <p className="text-sm text-gray-600">
                        A career guidance platform for teenagers and parents. It
                        provides up-to-date information about the labor market,
                        training, internship, and practice opportunities, as
                        well as a gamified algorithm to help with career choice.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-[-20px] left-[-20px] bg-white text-black font-bold w-20 h-20 flex items-center justify-center rounded-full border-2 border-black shadow-md text-sm text-center">
                    3rd
                    <br />
                    Place
                  </div>
                </div>

                {/* 2nd Place Card */}
                <div className="relative transform rotate-1">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[300px]">
                    <img
                      src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750558946/visual-journey-hackathon-img-2_reosvh.png"
                      alt="2nd Place"
                      className="w-full object-cover h-[220px]"
                    />
                    <div className="p-4 text-left">
                      <h4 className="font-bold text-lg text-black mb-1">
                        Current
                      </h4>
                      <p className="text-sm text-gray-600">
                        A career guidance platform for teenagers and parents. It
                        provides up-to-date information about the labor market,
                        training, internship, and practice opportunities, as
                        well as a gamified algorithm to help with career choice.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-[-20px] right-[-20px] bg-white text-black font-bold w-20 h-20 flex items-center justify-center rounded-full border-2 border-black shadow-md text-sm text-center">
                    2nd
                    <br />
                    Place
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 px-4 min-h-screen">
              <div className="max-w-5xl mx-auto text-center">
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
                  Highlights
                </motion.h4>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Event Highlights
                </h2>

                <div className="relative flex items-center justify-center">
                  {/* Left Arrow */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-[-40px] z-10 bg-background shadow-lg rounded-full p-2 hover:bg-secondary transition"
                  >
                    <ChevronLeft size={28} />
                  </button>

                  {/* Main Image */}
                  <div className="overflow-hidden rounded-xl shadow-xl w-full max-w-4xl">
                    <img
                      src={eventImages[current]}
                      alt={`Event ${current + 1}`}
                      className="w-full h-auto object-cover rounded-xl transition-all duration-300"
                    />
                  </div>

                  {/* Right Arrow */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-[-40px] z-10 bg-background shadow-lg rounded-full p-2 hover:bg-secondary transition"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VisualJourney;
