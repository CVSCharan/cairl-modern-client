import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { useState } from "react";

const Partner = () => {
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
              {loadingType === "join" && "Join Our Community"}
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
      <section className="relative bg-background text-center flex flex-col items-center">
        {/* Partner With Us Section */}
        <div className="bg-transparent py-20 px-4">
          <div className="max-w-7xl mx-auto text-center mb-12 mt-16">
            <motion.h4
              initial={{ opacity: 0.5, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              Partner With Us
            </motion.h4>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Collaborate on Innovation
            </h2>
            <p className="text-muted-foreground text-lg">
              Co-branded research, policy work, education programs, hackathons,
              and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {/* Who Should Partner */}
            <div className="border-2 border-primary rounded-2xl p-6 shadow-md flex flex-col h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Who Should Partner?
              </h3>
              <div className="bg-background rounded-lg p-4 flex-1 flex items-center">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                  <li className="text-left">Academic institutions</li>
                  <li className="text-left">Think tanks & policy units</li>
                  <li className="text-left">AI startups & incubators</li>
                  <li className="text-left">Corporate R&D divisions</li>
                  <li className="text-left">Government agencies</li>
                </ul>
              </div>
            </div>

            {/* Benefits of Partnership */}
            <div className="border-2 border-primary rounded-2xl p-6 shadow-md flex flex-col h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Benefits of Partnership
              </h3>
              <div className="bg-background rounded-lg p-4 flex-1 flex items-center">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                  <li className="text-left">
                    Co-develop programs and research
                  </li>
                  <li className="text-left">
                    Conduct joint hackathons and workshops
                  </li>
                  <li className="text-left">
                    Access curated talent and innovation labs
                  </li>
                  <li className="text-left">
                    Get visibility across CAiRL platforms and events
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => handleButtonClick("partnership")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Start a Partnership
            </button>
          </div>
        </div>
        {/* Sponsor an Initiative Section */}
        <div className="bg-transparent py-20 px-4 mb-28">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <motion.h4
              initial={{ opacity: 0.5, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              Sponsor an Initiative
            </motion.h4>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empower Our Programs
            </h2>
            <p className="text-muted-foreground text-lg">
              Support impactful programs, research, and talent by sponsoring
              initiatives at CAiRL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {/* Why Sponsor? */}
            <div className="border-2 border-foreground rounded-2xl p-6 shadow-md flex flex-col h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Why Sponsor?
              </h3>
              <div className="bg-background rounded-lg p-4 flex-1 flex items-center">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                  <li className="text-left">
                    Support grassroots innovation and research
                  </li>
                  <li className="text-left">
                    Promote inclusive AI education and awareness
                  </li>
                  <li className="text-left">
                    Enable events, challenges, and open projects
                  </li>
                  <li className="text-left">
                    Accelerate social impact and community growth
                  </li>
                </ul>
              </div>
            </div>

            {/* Sponsor Benefits */}
            <div className="border-2 border-foreground rounded-2xl p-6 shadow-md flex flex-col h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Benefits for Sponsors
              </h3>
              <div className="bg-background rounded-lg p-4 flex-1 flex items-center">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                  <li className="text-left">
                    Brand recognition and visibility at CAiRL events
                  </li>
                  <li className="text-left">
                    Opportunities to network with researchers & leaders
                  </li>
                  <li className="text-left">
                    Access to exclusive CAiRL reports & outcomes
                  </li>
                  <li className="text-left">
                    Showcase commitment to responsible AI development
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => handleButtonClick("sponsor")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
