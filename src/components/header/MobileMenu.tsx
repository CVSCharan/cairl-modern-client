import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MobileDropdown from "./MobileDropdown";
import type { MobileMenuProps } from "../../types/header";
import { navigationData } from "../../constants/navigation";

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeDropdown,
  onDropdownToggle,
  onClose,
}) => {
  const handleToggle = (dropdownName: string) => {
    onDropdownToggle(activeDropdown === dropdownName ? "" : dropdownName);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-30 bg-background/95 backdrop-blur-sm shadow-lg md:hidden"
        >
          <div className="pt-20 pb-8 px-6 h-full overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {navigationData.map((item) => (
                <MobileDropdown
                  key={item.label}
                  label={item.label}
                  isOpen={activeDropdown === item.label.toLowerCase()}
                  onToggle={() => handleToggle(item.label.toLowerCase())}
                  onClose={onClose}
                >
                  {item.links.map((section) => (
                    <div key={section.title} className="pt-2">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block py-2 px-4 text-foreground/80 hover:text-primary rounded-md hover:bg-secondary/50 transition-colors"
                          onClick={onClose}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </MobileDropdown>
              ))}
            </nav>

            <div className="border-t border-border/50 pt-6 mt-6">
              <Link
                to="/engage-with-us"
                className="block w-full text-center bg-primary text-primary-foreground rounded-md px-6 py-3 text-lg font-semibold hover:bg-primary/90 transition-all shadow-md"
                onClick={onClose}
              >
                Engage with us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
