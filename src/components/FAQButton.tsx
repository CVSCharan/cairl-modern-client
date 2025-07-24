
import React from "react";
import { Link } from "react-router-dom";

const FAQButton: React.FC = () => {
  return (
    <Link
      to="/engage-with-us#faqs"
      className="fixed bottom-6 left-6 bg-primary text-white px-5 py-3 rounded-full shadow-lg z-40 hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none flex items-center justify-center"
      aria-label="Open FAQs"
    >
      <span className="font-semibold text-background text-sm">FAQs</span>
    </Link>
  );
};

export default FAQButton;
