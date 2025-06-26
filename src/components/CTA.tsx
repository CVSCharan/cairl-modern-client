import React from "react";
import { BackgroundGradient } from "./ui/bg-gradient";

const CTA: React.FC = () => {
  return (
    <BackgroundGradient>
      <section
        className="section cta py-16 md:py-24 px-6 relative overflow-hidden rounded-2xl my-1 mx-1"
        style={{
          background: `
          linear-gradient(95.35deg, #000000 0.77%, #004A9F 50.41%, #071A37 99.86%),
          url('https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/swatch_gtmpsh.png')
        `,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-accent blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
              Ready to make an
              <span className="text-[#E5F5FC]"> impact</span> with CAiRL?
            </h2>
            <p className="font-sans text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore how you can get involved as a student, researcher,
              partner, or sponsor in our mission to advance AI for social good.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <a
                href="#become-a-member"
                className="bg-primary text-primary-foreground font-medium py-3 px-6 md:py-4 md:px-8 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans text-sm md:text-base"
              >
                Become a Member
              </a>
              <a
                href="#sponsor-program"
                className="bg-transparent border-2 border-primary text-primary font-medium py-3 px-6 md:py-4 md:px-8 rounded-xl hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans text-sm md:text-base"
              >
                Sponsor a Program
              </a>
              <a
                href="#start-partnership"
                className="bg-transparent border-2 border-border text-foreground font-medium py-3 px-6 md:py-4 md:px-8 rounded-xl hover:bg-secondary/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans text-sm md:text-base"
              >
                Start a Partnership
              </a>
            </div>
          </div>
        </div>
      </section>
    </BackgroundGradient>
  );
};

export default CTA;
