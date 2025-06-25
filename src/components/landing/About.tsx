import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div
      className="section about min-h-[500px] flex justify-center items-center w-full my-16 relative overflow-hidden"
      id="about-us"
    >
      <div className="absolute inset-0 bg-background -z-10"></div>
      <div className="tubelight-effect"></div>
      <div className="container flex flex-col justify-center items-center text-center px-4 relative z-10">
        <h4 className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full mb-4">
          About us
        </h4>
        <div className="section-header mb-6">
          <h2 className="section-title text-3xl font-bold text-foreground">
            Leading the Future of AI Innovation
          </h2>
        </div>
        <div className="about-content max-w-[900px]">
          <p className="about-text text-muted-foreground">
            CAiRL is a leading research lab dedicated to advancing AI
            technologies that benefit society. Our mission is to develop
            AI-based solutions, entrepreneurial ethics, and responsible AI for
            everyone. Our team brings together experts from diverse fields to
            create innovative AI applications that address real-world
            challenges, enhance user experiences, and promote the responsible
            use of technology. We firmly believe that AI should be developed
            with human values in mind, ensuring that technological advancements
            benefit all of society.
          </p>
          <div className="cta-container mt-10">
            <Link
              to="/about-us"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-full"
            >
              Know more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
