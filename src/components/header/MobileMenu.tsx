import React from "react";
import { Link } from "react-router-dom";
import MobileDropdown from "./MobileDropdown";
import type { MobileMenuProps } from "../../types/header";

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeDropdown,
  onDropdownToggle,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleToggle = (dropdownName: string) => {
    onDropdownToggle(activeDropdown === dropdownName ? "" : dropdownName);
  };

  return (
    <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-lg">
      <div className="pt-20 pb-8 px-6 max-h-screen overflow-y-auto">
        <MobileDropdown
          title="About us"
          isOpen={activeDropdown === "about"}
          onToggle={() => handleToggle("about")}
        >
          <div className="space-y-4">
            <Link to="/about-us#mission" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Our Mission</Link>
            <Link to="/about-us#vision" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Our Vision</Link>
            <Link to="/about-us#objectives" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Objectives</Link>
            <Link to="/about-us#goals" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Goals</Link>
          </div>
        </MobileDropdown>

        <MobileDropdown
          title="Services"
          isOpen={activeDropdown === "services"}
          onToggle={() => handleToggle("services")}
        >
          <div className="space-y-4">
            <Link to="/services#knowledge-empowerment" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>AI Bootcamps</Link>
            <Link to="/services#knowledge-empowerment" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Workshops</Link>
            <Link to="/services#knowledge-empowerment" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Center of Excellence</Link>
          </div>
        </MobileDropdown>

        <MobileDropdown
          title="Research & Innovation"
          isOpen={activeDropdown === "research"}
          onToggle={() => handleToggle("research")}
        >
          <div className="space-y-4">
            <Link to="/research-innovation#leadership" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>AI Research & Thought Leadership</Link>
            <Link to="/research-innovation#skill-development" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>AI Education & Skill Development</Link>
            <Link to="/research-innovation#partnerships" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>AI Ecosystem Building & Partnerships</Link>
          </div>
        </MobileDropdown>

        <MobileDropdown
          title="Happenings"
          isOpen={activeDropdown === "happenings"}
          onToggle={() => handleToggle("happenings")}
        >
          <div className="space-y-4">
            <Link to="/happenings#events" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Events</Link>
            <Link to="/happenings#webinars" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Webinars</Link>
            <Link to="/happenings#visual-journey" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Visual Journey</Link>
          </div>
        </MobileDropdown>

        <MobileDropdown
          title="Focus Groups"
          isOpen={activeDropdown === "focus-groups"}
          onToggle={() => handleToggle("focus-groups")}
        >
          <div className="space-y-4">
            <Link to="/focus-groups#enterprise-ai-adoption" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Enterprise AI Adoption</Link>
            <Link to="/focus-groups#capacity-building" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Capacity Building & Knowledge Management</Link>
            <Link to="/focus-groups#partner" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Partner with CAiRL</Link>
          </div>
        </MobileDropdown>

        <MobileDropdown
          title="Resources"
          isOpen={activeDropdown === "resources"}
          onToggle={() => handleToggle("resources")}
        >
          <div className="space-y-4">
            <Link to="#blog" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Blog</Link>
            <Link to="#podcast" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Podcast</Link>
            <Link to="#whitepaper" className="block text-ai-gray-dark hover:text-ai-blue-dark transition-colors" onClick={onClose}>Whitepaper</Link>
          </div>
        </MobileDropdown>

        <div className="border-t border-ai-gray-light/20 pt-6 mt-6">
          <Link
            to="/contact-us"
            className="block py-3 text-lg font-medium text-ai-gray-dark hover:text-ai-blue-dark transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>
          <Link
            to="/engage-with-us"
            className="block mt-4 w-full text-center bg-ai-blue-default text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-ai-blue-dark transition-all shadow-md"
            onClick={onClose}
          >
            Engage with us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
