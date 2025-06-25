import React from "react";
import MegaMenu from "./MegaMenu";
import { ArrowRight } from "lucide-react";

interface AboutDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutDropdown: React.FC<AboutDropdownProps> = ({ isOpen, onClose }) => {
  const sections = [
    {
      title: "Who We Are",
      links: [
        { name: "Our Mission", href: "/about-us#mission" },
        { name: "Our Vision", href: "/about-us#vision" },
        { name: "Objectives", href: "/about-us#objectives" },
        { name: "Goals", href: "/about-us#goals" },
      ],
    },
    {
      title: "Advisory Team",
      links: [
        { name: "Strategic Advisor", href: "/about-us#strategic-advisors" },
        { name: "Academic Advisor", href: "/about-us#academic-advisors" },
        { name: "Industry Advisor", href: "/about-us#industry-advisors" },
        { name: "Technology Advisor", href: "/about-us#technology-advisors" },
      ],
    },
    {
      title: "Our Team",
      links: [
        {
          name: "Board Members & Management Team",
          href: "/about-us#board-members",
        },
      ],
    },
    {
      title: "MOUs & Strategic Partnerships",
      links: [
        { name: "View All Partnerships", href: "/about-us#mou" },
      ],
    },
    {
      title: "FAQs",
      links: [
        { name: "Frequently Asked Questions", href: "/about-us#faqs" },
      ],
    },
  ];

  return (
    <MegaMenu isOpen={isOpen}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

export default AboutDropdown;
