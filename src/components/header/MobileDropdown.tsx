import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface MobileDropdownProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  onClose: () => void;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ label, isOpen, onToggle, children, onClose }) => {
  return (
    <div className="border-b border-border/50">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left text-lg font-medium text-foreground transition-colors duration-300 hover:text-primary"
      >
        <span>{label}</span>
        {isOpen ? (
          <Minus className="w-5 h-5" />
        ) : (
          <Plus className="w-5 h-5" />
        )}
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
            <div className="pt-2 pb-4 pl-4 pr-2 flex flex-col items-start">
              {React.Children.map(children, (child) =>
                React.isValidElement(child)
                  ? React.cloneElement(child as React.ReactElement<React.HTMLProps<HTMLDivElement>>, { onClick: onClose })
                  : child
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileDropdown;
