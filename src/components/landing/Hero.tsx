import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

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

  const partnerLogos = [
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750886760/colaberry-logo_dqizvh.webp",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/scroll_img_4_nfar9d.png",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176557/scroll_img_3_ttadxy.png",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750749649/Ccmb_emblem_rqgags.png",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176559/scroll_img_2_rc4chz.png",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/scroll_img_1_opp3ip.png",
  ];

  return (
    <section className="relative bg-transparent overflow-hidden">
      {/* Hero Background with Overlay */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10 rounded-b-[30px] shadow-xl" />
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

        {/* Main Content */}
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

        {/* Feature Cards - Centered at the bottom */}
        <div className="relative md:absolute -bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col md:flex-row gap-4 mt-8 md:mt-0">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-secondary rounded-xl p-4 flex items-center border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent w-full md:w-80"
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

      {/* Partner Logos Marquee */}
      <div className="bg-background py-10 mt-48 md:mt-24 rounded-xl shadow-md">
        <h3 className="text-center font-heading text-lg md:text-xl mb-6 text-muted-foreground">
          Trusted by Leading Organizations
        </h3>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <li key={index}>
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="h-10 md:h-14"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
