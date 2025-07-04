import React from "react";
import MegaMenu from "./MegaMenu";
import { ArrowRight } from "lucide-react";
import { researchAndInnovation } from "../../constants/navigation";

interface ResearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResearchDropdown: React.FC<ResearchDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <MegaMenu isOpen={isOpen}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {researchAndInnovation.links.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-foreground mb-4 border-b pb-2 text-center">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 group ml-6"
                    onClick={onClose}
                  >
                    <span className="w-6 flex items-center -ml-6">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
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
