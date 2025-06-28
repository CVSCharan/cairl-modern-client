import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <LampContainer>
      <section
        id="vision"
        className="relative bg-transparent text-center flex flex-col items-center mb-12 pt-12"
      >
        <div className="text-center flex flex-col items-center my-12 mt-24 px-4 z-10 w-full max-w-4xl">
          {/* Vision Header */}
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
            Our Vision
          </motion.h4>

          {/* Vision Title */}
          <h2 className="text-4xl font-bold text-foreground mb-6">
            A World Empowered by AI
          </h2>

          {/* Vision Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Our vision is to create a future where AI is seamlessly integrated
            into every aspect of life, improving human welfare, enabling
            sustainable development, and empowering communities around the
            world. At CAiRL, we aim to be a leader in the global AI ecosystem,
            driving responsible AI innovation that benefits humanity.
          </p>
        </div>
      </section>
    </LampContainer>
  );
};

export default Vision;
