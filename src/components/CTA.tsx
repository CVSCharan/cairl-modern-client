import React, { useState } from "react";
import { BackgroundGradient } from "./ui/bg-gradient";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingType, setLoadingType] = useState("");

  const handleButtonClick = (type: string) => {
    setLoadingType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[90vw] max-w-sm sm:max-w-md rounded-xl border border-border bg-card shadow-xl mx-auto">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center sm:text-left">
              {loadingType === "member" && "Become a Member"}
              {loadingType === "sponsor" && "Sponsor a Program"}
              {loadingType === "partnership" && "Start a Partnership"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">
              We're excited to have you join us!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center space-y-4 sm:space-y-6"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [0.8, 1.1, 0.8] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-primary/10 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl">✨</span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-primary"
                >
                  Stay Tuned!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-foreground font-medium text-sm sm:text-base md:text-lg"
                >
                  We're preparing something awesome for you.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-muted-foreground text-xs sm:text-sm md:text-base"
                >
                  Coming soon...
                </motion.p>
              </div>
            </motion.div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base w-full sm:w-auto"
            >
              Got it
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <section className="w-full flex flex-col justify-center items-center px-4 py-16">
        <div className="container max-w-7xl w-full">
          <BackgroundGradient>
            <div
              className="section cta py-12 px-6 relative overflow-hidden rounded-xl sm:rounded-2xl my-1 mx-1"
              style={{
                background: `
            linear-gradient(95.35deg, #000000 0.77%, #004A9F 50.41%, #071A37 99.86%),
            url('https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/swatch_gtmpsh.png')
          `,
                backgroundBlendMode: "overlay",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Decorative elements - Responsive */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 rounded-full bg-primary blur-2xl md:blur-3xl"></div>
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 rounded-full bg-accent blur-2xl md:blur-3xl"></div>
              </div>

              <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center">
                  <div className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                      Ready to Make an
                      <motion.span
                        initial={{ opacity: 0.5, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.4,
                          duration: 0.9,
                          ease: "easeInOut",
                        }}
                        className="text-primary block sm:inline"
                      >
                        {" "}
                        Impact
                      </motion.span>{" "}
                      <span className="block sm:inline">with CAiRL?</span>
                    </h2>
                    <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                      Explore how you can get involved as a student, researcher,
                      partner, or sponsor in our mission to advance AI for social
                      good.
                    </p>
                  </div>

                  {/* Responsive Button Layout */}
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
                    <button
                      onClick={() => handleButtonClick("member")}
                      className="flex-1 bg-primary text-primary-foreground font-medium py-3 px-4 sm:px-6 md:py-4 md:px-8 rounded-lg sm:rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans text-sm sm:text-base whitespace-nowrap"
                    >
                      Become a Member
                    </button>
                    <button
                      onClick={() => handleButtonClick("sponsor")}
                      className="flex-1 bg-transparent border-2 border-primary text-primary font-medium py-3 px-4 sm:px-6 md:py-4 md:px-8 rounded-lg sm:rounded-xl hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans text-sm sm:text-base whitespace-nowrap"
                    >
                      Sponsor a Program
                    </button>
                    <button
                      onClick={() => handleButtonClick("partnership")}
                      className="flex-1 bg-transparent border-2 border-border text-foreground font-medium py-3 px-4 sm:px-6 md:py-4 md:px-8 rounded-lg sm:rounded-xl hover:bg-secondary/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans text-sm sm:text-base whitespace-nowrap"
                    >
                      Start a Partnership
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </section>
    </>
  );
};

export default CTA;
