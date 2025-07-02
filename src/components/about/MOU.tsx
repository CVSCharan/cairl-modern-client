import { motion } from "framer-motion";

const MOU = () => {
  return (
    <div
      id="mou"
      className="relative bg-secondary min-h-screen flex flex-col justify-center items-center py-10"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 mt-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
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
            MOUs
          </motion.h4>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            MOUs and Strategic Partnerships
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            At CAIRL, we understand that collaboration is key to driving
            innovation and creating impactful AI solutions. We are proud to have
            formed several strategic partnerships and signed Memorandums of
            Understanding (MoUs) with leading organizations, institutions, and
            corporations to advance AI research, development, and application.
          </p>
          <button className="bg-primary text-background px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Know more
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245474/about_mou_img_ekci19.png"
            alt="MOU Partnerships"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MOU;
