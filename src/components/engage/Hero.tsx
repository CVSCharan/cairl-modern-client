import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-14">
      {/* Engage With Us Header */}
      <div className="text-center flex flex-col items-center mb-16">
        <motion.h4
          initial={{ opacity: 0.5, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          Engage With Us
        </motion.h4>
        <h1 className="text-4xl font-bold text-foreground mb-8 max-w-4xl">
          Join Our Collaborative Ecosystem
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Drive AI innovation and create meaningful impact together.
        </p>
      </div>

      {/* Engagement Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-accent rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750369409/streamline_collaborations-idea_rmal0h.svg"
                alt="Collaboration icon"
                className="h-8 w-8"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Collaboration
          </h3>
          <p className="text-muted-foreground">
            Partner with leading researchers, academics, and industry experts to
            drive AI innovation.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-accent rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750369409/hugeicons_ai-innovation-02_byogte.svg"
                alt="Innovation icon"
                className="h-8 w-8"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Innovation
          </h3>
          <p className="text-muted-foreground">
            Access cutting-edge research, state-of-the-art facilities, and
            collaborative opportunities.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-accent rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750369409/fluent_arrow-growth-20-filled_ycou4n.svg"
                alt="Growth icon"
                className="h-8 w-8"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Growth</h3>
          <p className="text-muted-foreground">
            Expand your knowledge and impact through our comprehensive programs
            and initiatives.
          </p>
        </div>
      </div>

      {/* Why Engage with CAiRL Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Why Engage with CAiRL?
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          CAiRL provides leading research, development and innovation
          opportunities through innovative education, development, and industry
          partnerships to advance AI solutions for social good and economic
          growth.
        </p>
      </div>
    </section>
  );
};

export default Hero;
