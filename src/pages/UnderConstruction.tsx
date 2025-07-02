import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BackgroundGradient } from "../components/ui/bg-gradient";
import { Button } from "../components/ui/button";

const UnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex items-center justify-center p-4 md:p-8">
      <BackgroundGradient className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden">
        <div className="relative overflow-hidden bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8">
            {/* Construction icon with animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-primary/10 rounded-full mb-4"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="text-5xl md:text-6xl"
              >
                🛠️
              </motion.div>
            </motion.div>

            {/* Title with staggered animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
              >
                Under Construction
              </motion.h1>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="max-w-2xl mx-auto"
              >
                <p className="text-lg md:text-xl text-muted-foreground">
                  We're working on something amazing for you.
                </p>
                <p className="mt-2 text-base md:text-lg text-muted-foreground/80">
                  Our team is actively developing this page to bring you the
                  best experience.
                </p>
              </motion.div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-full max-w-md h-2 bg-muted/30 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "70%" }}
                transition={{
                  duration: 2,
                  delay: 1.2,
                  ease: "easeInOut",
                }}
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </motion.div>

            {/* Coming soon text with typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-sm md:text-base text-muted-foreground/70 font-mono"
            >
              <span>Coming Soon...</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="inline-block w-2 h-4 md:h-5 bg-primary ml-1 align-middle"
              />
            </motion.div>

            {/* Return button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="pt-4"
            >
              <Button
                onClick={() => navigate("/")}
                variant="secondary"
                size="lg"
                className="font-medium"
              >
                Return to Home Page
              </Button>
            </motion.div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default UnderConstruction;
