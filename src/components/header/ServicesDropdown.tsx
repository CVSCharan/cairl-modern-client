import React from "react";
import MegaMenu from "./MegaMenu";
import { ArrowRight } from "lucide-react";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isOpen, onClose }) => {
  const sections = [
    {
      title: "Capacity Building & Knowledge Empowerment",
      links: [
        { name: "AI Bootcamps", href: "/services#knowledge-empowerment" },
        { name: "Workshops", href: "/services#knowledge-empowerment" },
        { name: "Center of Excellence", href: "/services#knowledge-empowerment" },
        { name: "AI Tech Conference & Summits", href: "/services#knowledge-empowerment" },
      ],
    },
    {
      title: "Innovation & Startup Support",
      links: [
        { name: "Hackathons & Innovation Challenges", href: "/services#innovation" },
        { name: "Startup Incubators & Innovation Hubs", href: "/services#innovation" },
        { name: "Joint Research Collaborations", href: "/services#innovation" },
      ],
    },
    {
      title: "Ecosystem Building & Social Impact",
      links: [
        { name: "AI for Social Good & Rural Outreach", href: "/services#eco-system" },
        { name: "Liaising & Policy Engagement", href: "/services#eco-system" },
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

export default ServicesDropdown;
