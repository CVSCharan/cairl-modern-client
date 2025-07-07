import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MegaMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute top-full left-0 w-full bg-background shadow-lg border-t border-border overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;

