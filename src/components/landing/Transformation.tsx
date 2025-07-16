import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Transformation: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 py-16">
      <div className="container max-w-7xl w-full">
        <div className="relative flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl">
          {/* Background Image with Overlay and Rounded Borders - Fully Responsive */}
          <div className="absolute inset-0 z-0 mx-auto max-w-7xl rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-50 rounded-xl sm:rounded-2xl" />
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176571/landing_img_2_a1n9no.png"
              alt="AI technology background"
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
            />
          </div>

          {/* Centered Content - Fully Responsive */}
          <div className="container mx-auto relative z-10 text-center py-12 px-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Driving Responsible AI
              <span className="block sm:inline"> Transformation</span>
            </h2>
            <p className="text-lg opacity-90 mx-auto max-w-2xl leading-relaxed">
              Our research focuses on developing AI technologies that are
              ethical, transparent, and beneficial to society. We work with
              partners across industries to implement responsible AI
              solutions.
            </p>
            <motion.div
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="cta-container inline-block"
            >
              <Link
                to="/services"
                className="inline-block bg-primary text-primary-foreground py-2.5 px-5 sm:py-3 sm:px-6 md:px-8 lg:py-3.5 lg:px-10 rounded-full hover:bg-primary/90 active:bg-primary/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;