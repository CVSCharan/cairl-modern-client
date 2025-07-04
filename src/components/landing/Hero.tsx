import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Partners from "./Partners";

const Hero: React.FC = () => {
  const featureCards = [
    {
      icon: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176559/landing_banners_icon_1_qzbtcb.png",
      alt: "Innovation icon",
      text: "Fostering innovation through collaborative research initiatives.",
    },
    {
      icon: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176560/landing_banners_icon_2_kciapm.png",
      alt: "Education icon",
      text: "Empowering communities with AI education and training.",
    },
    {
      icon: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176561/landing_banners_icon_3_ymi0p8.png",
      alt: "Ethics icon",
      text: "Promoting ethical AI practices and advocacy.",
    },
  ];

  const heroImgs = [
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176578/landing_img_1_hvbbeq.png",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751235765/landing-lslide-img2_afia6a.jpg",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751236202/landing-lslide-img5_mzmwmp.jpg",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751235758/landing-lslide-img4_pep8hc.jpg",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751236507/landing-lslide-img7_qhrdry.jpg",
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center container">
      <div className="relative bg-transparent overflow-hidden pb-8">
        {/* Container for the carousel and the overlay */}
        <div className="relative w-full h-full">
          {/* Enhanced gradient overlay with subtle animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 z-10 rounded-b-[30px] shadow-xl animate-pulse-subtle" />

          {/* Image Carousel with enhanced animations */}
          <Carousel
            className="w-full h-full carousel-container"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000, // Slightly longer for more professional feel
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {heroImgs.map((img, index) => (
                <CarouselItem key={index} className="carousel-item-animated">
                  <div className="relative overflow-hidden rounded-b-[30px]">
                    <img
                      src={img}
                      alt={`City skyline at night ${index + 1}`}
                      className="w-full h-full object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[640px] rounded-b-[30px] 
                               transform transition-all duration-1000 ease-in-out
                               hover:scale-105 carousel-image"
                    />
                    {/* Subtle Ken Burns effect overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-transparent to-black/10 opacity-0 
                                  transition-opacity duration-700 hover:opacity-100"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Enhanced Main Hero Content with staggered animations */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1
                className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-white leading-tight tracking-tight
                           animate-fade-in-up animation-delay-200"
              >
                Advancing{" "}
                <span className="text-[#85D1F1] animate-glow">AI</span> for
                <br />
                <span className="font-accent animate-fade-in-up animation-delay-400">
                  Social Good
                </span>
                <br />
                <span className="animate-fade-in-up animation-delay-600">
                  Together
                </span>
              </h1>
              <p
                className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-lightText-secondary mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed
                          animate-fade-in-up animation-delay-800"
              >
                Collaborative research, innovation, and education in artificial
                intelligence.
              </p>
            </div>
          </div>

          {/* Enhanced Feature Cards with staggered entrance animations */}
          <div className="absolute -bottom-20 sm:-bottom-16 md:-bottom-12 lg:-bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className={`bg-secondary rounded-xl p-3 sm:p-4 flex items-center border border-border shadow-lg 
                          transition-all duration-500 hover:shadow-xl hover:bg-accent hover:-translate-y-1 
                          w-full animate-slide-up backdrop-blur-sm bg-secondary/90
                          animation-delay-${(index + 1) * 200}`}
                style={{
                  animationDelay: `${(index + 1) * 200}ms`,
                }}
              >
                <div
                  className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0 
                              transition-transform duration-300 hover:rotate-12 hover:scale-110"
                >
                  <img
                    src={card.icon}
                    alt={card.alt}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </div>
                <p className="text-secondary-foreground text-xs sm:text-sm font-medium leading-snug">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing element - responsive */}
        <div className="mt-24 sm:mt-20 md:mt-18 lg:mt-16"></div>

        {/* Partner Logos Section */}
        <Partners />
      </div>
    </section>
  );
};

export default Hero;
