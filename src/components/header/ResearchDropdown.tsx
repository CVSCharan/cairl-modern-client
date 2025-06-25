import React from "react";
import MegaMenu from "./MegaMenu";
import { ArrowRight } from "lucide-react";

interface ResearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResearchDropdown: React.FC<ResearchDropdownProps> = ({ isOpen, onClose }) => {
  const sections = [
    {
      title: "Research & Innovation",
      links: [
        { name: "AI Research & Thought Leadership", href: "/research-innovation#leadership" },
        { name: "AI Education & Skill Development", href: "/research-innovation#skill-development" },
        { name: "AI Ecosystem Building & Partnerships", href: "/research-innovation#partnerships" },
      ],
    },
    {
      title: "Challenges & Support",
      links: [
        { name: "AI Hackathons & Innovation Challenges", href: "/research-innovation#hackathons" },
        { name: "AI for Social Good & Sustainability", href: "/research-innovation#sustainability" },
        { name: "AI Mentorship & Startup Support", href: "/research-innovation#mentorship" },
      ],
    },
  ];

  return (
    <MegaMenu isOpen={isOpen}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-foreground mb-4 border-b pb-2">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    onClick={onClose}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MegaMenu>
  );
};

export default ResearchDropdown;
