import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(1); // default open 2nd question

  const questions = [
    "What is CAiRL's mission?",
    "How does CAiRL collaborate with startups?",
    "What sectors does CAiRL focus on?",
    "How can I collaborate with CAiRL?",
    "Does CAiRL provide AI education or training programs?",
    "How does CAiRL ensure ethical AI development?",
    "How can I apply for grants or funding at CAiRL?",
    "What are CAiRL's future goals for AI in India?",
    "How can I stay updated with CAiRL's initiatives?",
  ];

  const answers = [
    "CAiRL's mission is to advance AI research and innovation in India through collaborative partnerships, cutting-edge research, and practical applications that address real-world challenges.",
    "CAiRL partners with startups through incubators like T-Hub, where we offer mentorship, resources, and connections to industry leaders.",
    "CAiRL focuses on multiple sectors including healthcare, agriculture, education, manufacturing, and public services.",
    "You can collaborate with CAiRL as a research partner, startup, academic institution, or individual researcher.",
    "Yes, CAiRL offers various educational programs including workshops, bootcamps, and certificate courses.",
    "CAiRL ensures ethical AI development through an Ethics Committee, promoting transparency, fairness, and impact assessments.",
    "Visit our website's Funding section for information on current grants, eligibility, and application procedures.",
    "CAiRL aims to make India a global AI hub with responsible governance, local solutions, and talent development.",
    "Subscribe to our newsletter, follow us on social media, and check our website for the latest updates.",
  ];

  return (
    <section
      id="faqs"
      className="bg-transparent min-h-screen w-full flex flex-col justify-center items-center py-16"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <motion.h4
            initial={{ opacity: 0.5, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            FAQS
          </motion.h4>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 bg-card rounded-xl overflow-hidden">
          {/* Left: Questions */}
          <div className="bg-background divide-y divide-border border-[1px] border-border rounded-xl">
            {questions.map((question, index) => (
              <div key={index}>
                <button
                  className={`w-full px-6 py-4 text-left flex items-center justify-between transition ${
                    activeIndex === index
                      ? "bg-primary/10 font-semibold text-primary"
                      : "hover:bg-muted text-foreground"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        activeIndex === index ? "bg-primary" : "bg-accent"
                      }`}
                    ></div>
                    {question}
                  </span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 md:hidden ${
                      activeIndex === index ? "-rotate-90 text-primary" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Answer for mobile view */}
                <div
                  className={`md:hidden p-6 ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                >
                  <p>{answers[index]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Answers (hidden on mobile) */}
          <div className="hidden md:block bg-secondary p-8 rounded-xl text-foreground text-base space-y-6">
            <h4 className="font-semibold text-primary mb-2">
              {questions[activeIndex]}
            </h4>
            <p>{answers[activeIndex]}</p>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 mb-12 max-w-7xl mx-auto my-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <svg
                  className="text-primary w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Need More Help?
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Can't find what you're looking for? Our team is here to help you
              with any additional questions about our programs and services.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2m2-4h6a2 2 0 012 2v6a2 2 0 01-2 2h-6l-4 4V8a2 2 0 012-2z"
                  />
                </svg>
                <span>Expert Support</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">
                Partnership Inquiries
              </h4>
              <p className="text-muted-foreground text-sm">
                Information about collaboration opportunities and strategic
                partnerships
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">
                Program Details
              </h4>
              <p className="text-muted-foreground text-sm">
                Detailed information about our educational programs and training
                initiatives
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/engage-with-us#get-in-touch"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Contact Support
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
