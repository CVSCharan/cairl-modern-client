import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about-us"
      className="relative min-h-[570px] flex items-center justify-center w-full bg-background overflow-hidden"
    >
      {/* Background Lamp Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2">
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
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm md:text-base font-medium mb-8 shadow-sm"
        >
          About Us
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-6"
        >
          Leading the Future of AI Innovation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-3xl text-base md:text-lg text-muted-foreground mx-auto"
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
          className="mt-10"
        >
          <Link
            to="/about-us"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full text-base font-semibold transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          >
            Know More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
