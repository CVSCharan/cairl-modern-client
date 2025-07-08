import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

const Membership = () => {
  const membershipPlans = [
    {
      name: "Platinum",
      price: "₹10,000",
      popular: false,
      features: [
        "Lifetime Access",
        "50% Discount on Events, Training & Certifications",
        "VIP access, long-term savings, priority invites",
      ],
    },
    {
      name: "Gold",
      price: "₹2,500",
      popular: true,
      features: [
        "Annual Access",
        "25% Discount on Events, Training & Certifications",
        "Great for active professionals and educators",
      ],
    },
    {
      name: "Silver",
      price: "₹1,500",
      popular: false,
      features: [
        "6 months Access",
        "15% Discount on Events, Training & Certifications",
        "Ideal for learners and short-term contributors",
      ],
    },
    {
      name: "Bronze",
      price: "₹1,000",
      popular: false,
      features: [
        "3 months Access",
        "10% Discount on Events, Training & Certifications",
        "Entry-level access to workshops and events",
      ],
    },
  ];

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
      <section className="relative bg-transparent text-center flex flex-col items-center">
        {/* Membership Plans Section */}
        <div className="w-full bg-card pb-16 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="text-center mb-16">
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
                Membership Plans
              </motion.h4>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg text-muted-foreground">
                Select the plan that best fits your needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {membershipPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-6 border-2 ${
                    plan.popular ? "border-primary" : "border-border"
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-4">
                      {plan.price}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex justify-start items-center text-sm text-muted-foreground text-left"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleButtonClick("member")}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {/* Community Plan Card */}
            <div className="my-16 max-w-3xl mx-auto">
              <div className="bg-transparent rounded-xl p-6 border-2 border-dashed border-gray-300 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="text-3xl font-bold text-foreground">₹0</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Community
                    </h3>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        It's completely Free
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Access to resources, blogs, newsletters, free events &
                        recorded courses
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Discounts on webinars & workshops
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => handleButtonClick("join")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
