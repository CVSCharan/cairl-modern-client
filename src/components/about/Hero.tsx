import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-transparent overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10 rounded-b-[30px] shadow-xl" />
        <img
          src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750244957/about_img_1_b5biqp.png"
          alt="About CAiRL"
          className="w-full h-full object-cover max-h-[420px] md:max-h-[620px] rounded-b-[30px]"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h4
            initial={{ opacity: 0.5, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm font-base mb-8"
          >
            About Us
          </motion.h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            India's Collaborative AI Ecosystem for Social Good, Research &
            Innovation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advancing AI technologies that benefit society through research,
            innovation, and ethical applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
