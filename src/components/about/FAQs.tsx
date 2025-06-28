import { useState } from "react";
import { motion } from "framer-motion";

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
      className="bg-background min-h-screen flex justify-center items-center py-28"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <motion.h4
            initial={{ opacity: 0.5, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            FAQs
          </motion.h4>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 bg-card rounded-xl overflow-hidden">
          {/* Left: Questions */}
          <div className="bg-background divide-y divide-border border-[1px] border-border rounded-xl">
            {questions.map((question, index) => (
              <button
                key={index}
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
                  className={`w-4 h-4 transform transition-transform duration-200 ${
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
            ))}
          </div>

          {/* Right: Answers */}
          <div className="bg-secondary p-8 rounded-xl text-foreground text-base space-y-6">
            <h4 className="font-semibold text-primary mb-2">
              {questions[activeIndex]}
            </h4>
            <p>{answers[activeIndex]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
