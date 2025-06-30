import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Phone, Mail, MapPin } from "lucide-react";

const Engage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingType, setLoadingType] = useState("");

  const handleButtonClick = (type: string) => {
    setLoadingType(type);
    setIsModalOpen(true);
  };

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

  useEffect(() => {
    // Force scroll to top on component mount
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // "smooth" for animation
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

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

      <main className="relative overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-14">
          {/* Engage With Us Header */}
          <div className="text-center flex flex-col items-center mb-16">
            <motion.h4
              initial={{ opacity: 0.5, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium mb-8"
            >
              Engage
            </motion.h4>
            <h1 className="text-4xl font-bold text-foreground mb-8 max-w-4xl">
              Engage With Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Join our collaborative ecosystem to drive AI innovation and create
              meaningful impact together.
            </p>
          </div>

          {/* Engagement Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-accent rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750369409/streamline_collaborations-idea_rmal0h.svg"
                    alt="Collaboration icon"
                    className="h-8 w-8"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Collaboration
              </h3>
              <p className="text-muted-foreground">
                Partner with leading researchers, academics, and industry
                experts to drive AI innovation.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-accent rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750369409/hugeicons_ai-innovation-02_byogte.svg"
                    alt="Innovation icon"
                    className="h-8 w-8"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                Access cutting-edge research, state-of-the-art facilities, and
                collaborative opportunities.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-accent rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750369409/fluent_arrow-growth-20-filled_ycou4n.svg"
                    alt="Growth icon"
                    className="h-8 w-8"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Growth
              </h3>
              <p className="text-muted-foreground">
                Expand your knowledge and impact through our comprehensive
                programs and initiatives.
              </p>
            </div>
          </div>

          {/* Why Engage with CAiRL Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Why Engage with CAiRL?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              CAiRL provides leading research, development and innovation
              opportunities through innovative education, development, and
              industry partnerships to advance AI solutions for social good and
              economic growth.
            </p>
          </div>
        </div>

        <div className="relative bg-transparent text-center flex flex-col items-center">
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
                  className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm font-medium mb-8"
                >
                  Plans
                </motion.h4>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Membership Plans
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose the plan that best fits your needs and goals
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
        </div>

        <div className="relative bg-transparent text-center flex flex-col items-center">
          {/* MOU Section */}
          <div className="w-full bg-secondary py-20 px-4">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="lg:w-1/2 text-left">
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
                  innovation and creating impactful AI solutions. We are proud
                  to have formed several strategic partnerships and signed
                  Memorandums of Understanding (MoUs) with leading
                  organizations, institutions, and corporations to advance AI
                  research, development, and application.
                </p>
                <button className="bg-primary text-background px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Know more
                </button>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245474/about_mou_img_ekci19.png"
                  alt="MOU Partnerships"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

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
                className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium mb-8"
              >
                Partner
              </motion.h4>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partner With Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Collaborate on co-branded research, policy work, education
                programs, hackathons, and more.
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
              className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium mb-8"
            >
              Sponsor
            </motion.h4>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sponsor an Initiative
            </h2>
            <p className="text-muted-foreground text-lg">
              Empower impactful programs, research, and talent by sponsoring
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

        {/* Contact Form Section */}
        <div className="w-full bg-secondary py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h4
                initial={{ opacity: 0.5, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium mb-8"
              >
                Contact
              </motion.h4>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Reach out to us for collaboration, inquiries, or to learn more
                about our AI initiatives.
              </p>
            </div>
            <div className="bg-card rounded-2xl shadow-sm border border-border p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
                      placeholder="ACME"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      LinkedIn Profile
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
                      placeholder="linkedin.com/in/..."
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="engagement"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Type of Engagement*
                  </label>
                  <div className="relative">
                    <select
                      id="engagement"
                      name="engagement"
                      required
                      className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary appearance-none"
                    >
                      <option value="" disabled>
                        Select One
                      </option>
                      <option value="collaboration">Collaboration</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Tell us briefly about your interest"
                  />
                </div>

                <div className="w-full flex justify-center items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Submit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="py-16 px-4 bg-transparent z-10">
          <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
            <motion.h4
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm font-base mb-8"
            >
              Connect
            </motion.h4>
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-foreground mb-1">
                  Connect with us
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  Have questions, ideas, or just want to connect?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-12">
              {/* Phone */}
              <div className="bg-background p-6 md:p-8 rounded-xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-3"
                >
                  <Phone className="text-primary w-6 h-6" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  Phone
                </h3>
                <p className="text-muted-foreground mb-1 text-sm md:text-base">
                  +91-9391335191
                </p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Monday - Friday, 09:00 AM - 06:00PM
                </p>
              </div>

              {/* Email */}
              <div className="bg-background p-6 md:p-8 rounded-xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-3"
                >
                  <Mail className="text-primary w-6 h-6" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground mb-1 text-sm md:text-base">
                  info@cairl.org
                </p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  We'll respond as soon as possible
                </p>
              </div>

              {/* Location */}
              <div className="bg-background p-6 md:p-8 rounded-xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-3"
                >
                  <MapPin className="text-primary w-6 h-6" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground mb-1 text-sm md:text-base">
                  T-Hub, 2.0, Inorbit Mall Rd,
                  <br />
                  Vittal Rao Nagar, Madhapur,
                  <br />
                  Hyderabad, Telangana 500081
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-lg overflow-hidden shadow-sm border border-border h-96 mb-16 max-w-6xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0618414487137!2d78.3766555750799!3d17.434551003999915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e37831f177%3A0x32d4499d34baaa78!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1719228980712!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CAiRL at T-Hub Phase 2, Madhapur"
          />
        </div>
      </main>
    </>
  );
};

export default Engage;
