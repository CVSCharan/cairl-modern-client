import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative bg-secondary min-h-screen flex flex-col justify-center items-center"
    >
      <div className="py-16 pt-24 px-4 z-10 w-full max-w-7xl mx-auto">
        {/* Mission Header - Centered */}
        <div className="text-center mb-12">
          <motion.h4
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm md:text-base font-medium mb-8"
          >
            Our Mission
          </motion.h4>

          {/* Mission Title */}
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Building an Ecosystem of
            <br />
            Innovation and Responsibility
          </h1>

          {/* Mission Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our mission is to lead the charge in AI innovation by creating an
            ecosystem that fosters collaboration and drives impactful change. We
            focus on developing AI technologies that are both ethical and
            practical, and we aim to make AI accessible and impactful across
            diverse sectors.
          </p>
        </div>

        {/* Two-column layout for diagram and points */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left column - Diagram */}
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245473/about_img_2_jtyhwv.png"
              alt="CAiRL Center of Excellence for AI"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right column - Points */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              {/* First point */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Advance AI research and development
                </h3>
                <p className="text-muted-foreground">
                  in domains like healthcare, agriculture, and biopharma,
                  leveraging AI to solve real-world problems.
                </p>
              </div>

              {/* Second point */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Build an inclusive AI ecosystem
                </h3>
                <p className="text-muted-foreground">
                  that promotes interdisciplinary collaboration and fosters
                  diverse perspectives.
                </p>
              </div>

              {/* Third point */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Champion ethical AI development
                </h3>
                <p className="text-muted-foreground">
                  ensuring that our work is responsible, transparent, and
                  aligned with societal values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
