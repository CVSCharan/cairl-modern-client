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
      {/* Combined Hero and Features Section */}
      <div className="relative w-full pb-32 sm:pb-24 md:pb-20">
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
                delay: 6000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {heroImgs.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={img}
                      alt={`Advancing AI for Social Good ${index + 1}`}
                      className="w-full h-full object-cover max-h-[450px] sm:max-h-[500px] md:max-h-[550px] lg:max-h-[600px] xl:max-h-[640px] transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Hero Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white leading-tight tracking-tight">
                Advancing <span className="text-[#85D1F1]">AI</span> for
                <br />
                <span className="font-accent">Social Good</span>
                <br />
                <span>Together</span>
              </h1>
              <p className="font-sans text-base sm:text-lg md:text-xl text-lightText-secondary max-w-sm sm:max-w-md md:max-w-lg mx-auto leading-relaxed">
                Collaborative research, innovation, and education in artificial
                intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="relative z-20 w-full -mt-40 sm:-mt-20 md:-mt-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-4 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-xl p-4 flex items-center border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 w-full backdrop-blur-sm bg-secondary/90"
                >
                  <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0 transition-transform duration-300 hover:scale-110">
                    <img
                      src={card.icon}
                      alt={card.alt}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <p className="text-secondary-foreground text-sm sm:text-base font-medium leading-snug">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
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
