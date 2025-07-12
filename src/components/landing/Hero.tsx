import React, { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Partners from "./Partners";
import { motion, AnimatePresence } from "framer-motion";

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  // Combined feature data with images and text
  const carouselData = [
    {
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752356161/landing-banner-img6_bekmes.webp",
      title: "Innovation",
      text: "Fostering innovation through collaborative research initiatives.",
    },
    {
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752355511/landing-banner-img2_popakm.webp",
      title: "Education",
      text: "Empowering communities with AI education and training.",
    },
    {
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752355512/landing-banner-img3_ajolkx.webp",
      title: "Ethics",
      text: "Promoting ethical AI practices and advocacy.",
    },
  ];

  // Update active index when carousel changes
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);

    // Initial call to set the first slide
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <section className="w-full flex flex-col justify-center items-center container">
      {/* Combined Hero and Features Section */}
      <div className="relative w-full pb-12 sm:pb-12 md:pb-10">
        {/* Hero section with Image and Text */}
        <div className="relative w-full h-full rounded-b-[30px] overflow-hidden shadow-lg">
          {/* Image Carousel */}
          <Carousel
            className="w-full h-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 8000,
                stopOnInteraction: false,
              }),
            ]}
            setApi={setCarouselApi}
          >
            <CarouselContent>
              {carouselData.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <div className="w-full h-full overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={`${item.title} - ${item.text}`}
                        width={1920}
                        height={640}
                        loading="lazy"
                        className="w-full h-full object-cover max-h-[320px] sm:max-h-[450px] md:max-h-[550px] lg:max-h-[600px] xl:max-h-[640px]"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.02 }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent sm:from-black/70 sm:via-black/60" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Hero Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="container mx-auto px-4 py-8 text-center">
              <motion.h1
                className="font-heading text-base sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-white leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                Advancing{" "}
                <motion.span
                  className="text-[#85D1F1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  AI
                </motion.span>{" "}
                for
                <br />
                <motion.span
                  className="font-accent"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Social Good
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  Together
                </motion.span>
              </motion.h1>

              {/* Animated Feature Text */}
              <motion.div
                className="relative h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[120px] overflow-visible py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 60,
                      damping: 20,
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center px-4 py-2"
                  >
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <motion.h2
                        className="text-[#85D1F1] font-bold text-lg sm:text-2xl md:text-3xl"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        {carouselData[activeIndex].title}
                      </motion.h2>
                    </div>
                    <motion.p
                      className="font-sans text-sm sm:text-lg md:text-xl text-lightText-secondary max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed px-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {carouselData[activeIndex].text}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {carouselData.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-secondary w-8"
                    : "bg-primary/50 hover:bg-primary/70"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  if (carouselApi) {
                    carouselApi.scrollTo(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="w-full">
        <Partners />
      </div>
    </section>
  );
};

export default Hero;
