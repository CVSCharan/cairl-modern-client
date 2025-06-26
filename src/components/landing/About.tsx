import React from "react";
import { Link } from "react-router-dom";
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <LampContainer>
      <div
        className="section about h-auto flex flex-col justify-center items-center w-full my-12 md:my-16 relative"
        id="about-us"
      >
        <div className="absolute inset-0 bg-transparent -z-10"></div>

        <motion.h4
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full mb-4 text-sm md:text-base"
        >
          About us
        </motion.h4>
        <div className="section-header mb-4 md:mb-6">
          <motion.h2
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="section-title text-2xl md:text-3xl font-bold text-foreground"
          >
            Leading the Future of AI Innovation
          </motion.h2>
        </div>
        <div className="about-content max-w-full md:max-w-[900px] text-center">
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="about-text text-base md:text-lg text-muted-foreground"
          >
            CAiRL is a leading research lab dedicated to advancing AI
            technologies that benefit society. Our mission is to develop
            AI-based solutions, entrepreneurial ethics, and responsible AI for
            everyone. Our team brings together experts from diverse fields to
            create innovative AI applications that address real-world
            challenges, enhance user experiences, and promote the responsible
            use of technology. We firmly believe that AI should be developed
            with human values in mind, ensuring that technological advancements
            benefit all of society.
          </motion.p>
          <div className="cta-container mt-8 md:mt-10 text-center">
            <Link
              to="/about-us"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-3 md:px-6 md:py-4 rounded-full text-sm md:text-base"
            >
              Know more
            </Link>
          </div>
        </div>
      </div>
    </LampContainer>
  );
};

export default About;
