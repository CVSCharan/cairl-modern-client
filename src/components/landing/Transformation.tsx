import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Transformation: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="container max-w-7xl">
        <div className="relative flex items-center justify-center overflow-hidden py-20 md:py-28 px-4">
          {/* Background Image with Overlay and Rounded Borders */}
          <div className="absolute inset-0 z-0 mx-auto max-w-7xl rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl" />
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176571/landing_img_2_a1n9no.png"
              alt="AI technology background"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Centered Content */}
          <div className="container mx-auto relative z-10 py-12 md:py-16 text-center max-w-4xl">
            <div className="px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Driving Responsible AI Transformation
              </h2>
              <p className="text-lg md:text-xl text-white mb-6 md:mb-8 opacity-90 mx-auto max-w-3xl">
                Our research focuses on developing AI technologies that are
                ethical, transparent, and beneficial to society. We work with
                partners across industries to implement responsible AI
                solutions.
              </p>
              <motion.div
                initial={{ opacity: 0.5, y: 70 }}
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
                  className="inline-block bg-white text-blue-800 font-medium py-3 px-6 md:px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg text-sm md:text-base"
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
