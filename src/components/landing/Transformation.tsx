import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Transformation: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl w-full">
        <div className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
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
          <div className="container mx-auto relative z-10 py-8 sm:py-10 md:py-12 lg:py-16 text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                Driving Responsible AI
                <span className="block sm:inline"> Transformation</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-6 md:mb-8 opacity-90 mx-auto max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl leading-relaxed">
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
      </div>
    </section>
  );
};

export default Transformation;