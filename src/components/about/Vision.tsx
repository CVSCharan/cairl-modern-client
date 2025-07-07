import React from "react";
import { motion } from "framer-motion";

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="relative flex items-center justify-center min-h-screen w-full bg-background overflow-hidden"
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
          className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm md:text-base font-medium mb-8 shadow-sm"
        >
          Our Vision
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-6"
        >
          A World Empowered by AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-3xl text-base md:text-lg text-muted-foreground mx-auto"
        >
          Our vision is to create a future where AI is seamlessly integrated
          into every aspect of life, improving human welfare, enabling
          sustainable development, and empowering communities around the
          world. At CAiRL, we aim to be a leader in the global AI ecosystem,
          driving responsible AI innovation that benefits humanity.
        </motion.p>
      </div>
    </section>
  );
};

export default Vision;