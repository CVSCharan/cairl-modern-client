import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "../../lib/utils";

const FAQs = () => {
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
      className="bg-transparent w-full flex flex-col justify-center items-center py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 lg:px-8 w-full">
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
            FAQs
          </motion.h4>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-4 sm:p-6 md:p-8">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {questions.map((question, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className={cn(
                  "border-b border-border/50",
                  index === questions.length - 1 && "border-b-0"
                )}
              >
                <AccordionTrigger className="text-lg text-left font-semibold text-foreground hover:no-underline py-6">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6">
                  {answers[index]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 mt-16 max-w-4xl mx-auto w-full">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
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
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you
            with any additional questions about our programs and services.
          </p>
          <Link
            to="/engage-with-us#get-in-touch"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Contact Support
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
