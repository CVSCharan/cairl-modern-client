import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  subLinks?: NavLink[];
}

interface NavSection {
  title: string;
  links: NavLink[];
}

interface AdvancedDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavSection[];
}

const AdvancedDropdown = forwardRef<HTMLDivElement, AdvancedDropdownProps>(
  ({ isOpen, onClose, items }, ref) => {
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

    const handleMouseEnter = (title: string) => {
      setActiveSubMenu(title);
    };

    const handleMouseLeave = () => {
      setActiveSubMenu(null);
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 mt-2 w-64 bg-background rounded-lg shadow-lg border border-border z-50"
            onMouseLeave={onClose}
          >
            <div className="p-2">
              {items.map((section) => (
                <div key={section.title} className="relative">
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li
                        key={link.name}
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                      >
                        <Link
                          to={link.href}
                          onClick={onClose}
                          className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted/50 transition-colors duration-200 group"
                        >
                          <span>{link.name}</span>
                          {link.subLinks && (
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          )}
                        </Link>
                        {link.subLinks && activeSubMenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="absolute top-0 left-full ml-2 w-64 bg-background rounded-lg shadow-lg border border-border"
                          >
                            <div className="p-2">
                              <ul className="space-y-1">
                                {link.subLinks.map((subLink) => (
                                  <li key={subLink.name}>
                                    <Link
                                      to={subLink.href}
                                      onClick={onClose}
                                      className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted/50 transition-colors duration-200"
                                    >
                                      {subLink.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

export default AdvancedDropdown;