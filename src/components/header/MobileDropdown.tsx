import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileDropdownProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-ai-gray-light/20">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left text-lg font-medium text-ai-gray-dark transition-colors duration-300 hover:text-ai-blue-dark"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 pl-4 pr-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileDropdown;