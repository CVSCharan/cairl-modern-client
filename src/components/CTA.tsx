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
        <DialogContent className="sm:max-w-md rounded-xl border border-border bg-card shadow-xl">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-xl md:text-2xl font-bold text-foreground">
              {loadingType === "member" && "Become a Member"}
              {loadingType === "sponsor" && "Sponsor a Program"}
              {loadingType === "partnership" && "Start a Partnership"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm md:text-base">
              We're excited to have you join us!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-4 md:p-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center space-y-6"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
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
                  <span className="text-4xl md:text-5xl">✨</span>
                </div>
              </div>

              <div className="space-y-3">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl md:text-2xl font-bold text-primary"
                >
                  Stay Tuned!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-foreground font-medium text-base md:text-lg"
                >
                  We're preparing something awesome for you.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-muted-foreground text-sm md:text-base"
                >
                  Coming soon...
                </motion.p>
              </div>
            </motion.div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Got it
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <BackgroundGradient>
        <div
          className="section cta py-16 md:py-24 px-6 relative overflow-hidden rounded-2xl my-1 mx-1"
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
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-primary blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-accent blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
                Ready to make an
                <motion.span
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  className="text-background"
                >
                  {" "}
                  impact
                </motion.span>{" "}
                with CAiRL?
              </h2>
              <p className="font-sans text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                Explore how you can get involved as a student, researcher,
                partner, or sponsor in our mission to advance AI for social
                good.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full max-w-3xl mx-auto">
                <button
                  onClick={() => handleButtonClick("member")}
                  className="flex-1 bg-primary text-primary-foreground font-medium py-3 px-4 sm:px-6 md:py-4 md:px-8 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans text-sm md:text-base"
                >
                  Become a Member
                </button>
                <button
                  onClick={() => handleButtonClick("sponsor")}
                  className="flex-1 bg-transparent border-2 border-primary text-primary font-medium py-3 px-4 sm:px-6 md:py-4 md:px-8 rounded-xl hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans text-sm md:text-base"
                >
                  Sponsor a Program
                </button>
                <button
                  onClick={() => handleButtonClick("partnership")}
                  className="flex-1 bg-transparent border-2 border-border text-foreground font-medium py-3 px-4 sm:px-6 md:py-4 md:px-8 rounded-xl hover:bg-secondary/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans text-sm md:text-base"
                >
                  Start a Partnership
                </button>
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </>
  );
};

export default CTA;
