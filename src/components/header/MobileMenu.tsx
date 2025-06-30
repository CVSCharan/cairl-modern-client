import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MobileDropdown from "./MobileDropdown";
import type { MobileMenuProps } from "../../types/header";

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeDropdown,
  onDropdownToggle,
  onClose,
  isScrolled,
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
          className={`fixed inset-0 z-20 ${isScrolled ? 'bg-secondary/70 shadow-md backdrop-blur-sm' : 'bg-background/95 backdrop-blur-sm'}`}
        >
          <div className="pt-20 pb-8 px-6 h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              <MobileDropdown
                title="About us"
                isOpen={activeDropdown === "about"}
                onToggle={() => handleToggle("about")}
              >
                <Link to="/about-us#mission" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Our Mission</Link>
                <Link to="/about-us#vision" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Our Vision</Link>
                <Link to="/about-us#objectives" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Objectives</Link>
                <Link to="/about-us#goals" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Goals</Link>
              </MobileDropdown>

              <MobileDropdown
                title="Services"
                isOpen={activeDropdown === "services"}
                onToggle={() => handleToggle("services")}
              >
                <Link to="/services#knowledge-empowerment" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>AI Bootcamps</Link>
                <Link to="/services#knowledge-empowerment" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Workshops</Link>
                <Link to="/services#knowledge-empowerment" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Center of Excellence</Link>
              </MobileDropdown>

              <MobileDropdown
                title="Research & Innovation"
                isOpen={activeDropdown === "research"}
                onToggle={() => handleToggle("research")}
              >
                <Link to="/research-innovation#leadership" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>AI Research & Thought Leadership</Link>
                <Link to="/research-innovation#skill-development" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>AI Education & Skill Development</Link>
                <Link to="/research-innovation#partnerships" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>AI Ecosystem Building & Partnerships</Link>
              </MobileDropdown>

              <MobileDropdown
                title="Happenings"
                isOpen={activeDropdown === "happenings"}
                onToggle={() => handleToggle("happenings")}
              >
                <Link to="/happenings#events" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Events</Link>
                <Link to="/happenings#webinars" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Webinars</Link>
                <Link to="/happenings#visual-journey" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Visual Journey</Link>
              </MobileDropdown>

              <MobileDropdown
                title="Focus Groups"
                isOpen={activeDropdown === "focus-groups"}
                onToggle={() => handleToggle("focus-groups")}
              >
                <Link to="/focus-groups#enterprise-ai-adoption" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Enterprise AI Adoption</Link>
                <Link to="/focus-groups#capacity-building" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Capacity Building & Knowledge Management</Link>
                <Link to="/focus-groups#partner" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Partner with CAiRL</Link>
              </MobileDropdown>

              <MobileDropdown
                title="Resources"
                isOpen={activeDropdown === "resources"}
                onToggle={() => handleToggle("resources")}
              >
                <Link to="#blog" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Blog</Link>
                <Link to="#podcast" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Podcast</Link>
                <Link to="#whitepaper" className="block py-2 px-4 text-foreground/80 hover:text-primary" onClick={onClose}>Whitepaper</Link>
              </MobileDropdown>
            </nav>

            <div className="border-t border-border/50 pt-6 mt-6">
              <Link
                to="/contact-us"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={onClose}
              >
                Contact
              </Link>
              <Link
                to="/engage-with-us"
                className="block mt-4 w-full text-center bg-primary text-primary-foreground rounded-md px-6 py-3 text-lg font-semibold hover:bg-primary/90 transition-all shadow-md"
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
