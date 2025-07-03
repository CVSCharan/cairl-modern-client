import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
          {/* Gradient overlay to darken the images for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10 rounded-b-[30px] shadow-xl" />

          {/* Image Carousel */}
          <Carousel
            className="w-full h-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {heroImgs.map((img, index) => (
                <CarouselItem key={index}>
                  <img
                    src={img}
                    alt={`City skyline at night ${index + 1}`}
                    className="w-full h-full object-cover max-h-[420px] md:max-h-[620px] rounded-b-[30px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
          </Carousel>

          {/* Main Hero Content (Text) */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 text-white leading-tight tracking-tight">
                Advancing <span className="text-[#85D1F1]">AI</span> for
                <br />
                <span className="font-accent">Social Good</span>
                <br />
                Together
              </h1>
              <p className="font-sans text-lg md:text-xl text-lightText-secondary mb-8 md:mb-12 max-w-md md:max-w-2xl mx-auto leading-relaxed">
                Collaborative research, innovation, and education in artificial
                intelligence.
              </p>
            </div>
          </div>

          {/* Feature Cards - Positioned towards the bottom of the carousel */}
          <div className="absolute -bottom-16 md:-bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col md:flex-row gap-4 w-full max-w-4xl px-4">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-4 flex items-center border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent w-full"
              >
                <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                  <img src={card.icon} alt={card.alt} className="w-6 h-6" />
                </div>
                <p className="text-secondary-foreground text-sm font-medium leading-snug">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing element to push the partners section down, accounting for the absolutely positioned feature cards */}
        <div className="mt-20 md:mt-16"></div>

        {/* Partner Logos Section */}
        <Partners />
      </div>
    </section>
  );
};

export default Hero;
