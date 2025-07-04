import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about-us"
      className="relative flex items-center justify-center min-h-screen w-full bg-background overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
    >
      {/* Background Lamp Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[20rem] w-[20rem] sm:h-[24rem] sm:w-[24rem] md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem] xl:h-[36rem] xl:w-[36rem] -translate-x-1/2 -translate-y-1/2">
          <div
            className="absolute h-full w-full rounded-full bg-primary/10 blur-3xl"
            style={{ transform: "scale(1.5)" }}
          />
          <div
            className="absolute h-full w-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(29, 78, 216, 0.2) 0%, transparent 60%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-background text-foreground text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-6 md:mb-8 shadow-sm border border-border"
        >
          About Us
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight"
        >
          Leading the Future of{" "}
          <span className="text-primary">AI Innovation</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          CAiRL is a leading research lab dedicated to advancing AI technologies
          that benefit society. Our mission is to develop AI-based solutions,
          entrepreneurial ethics, and responsible AI for everyone. Our team
          brings together experts from diverse fields to create innovative AI
          applications that address real-world challenges, enhance user
          experiences, and promote the responsible use of technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12"
        >
          <Link
            to="/about-us"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg shadow-md inline-block"
          >
            Know More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
