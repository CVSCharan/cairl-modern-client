import React from "react";
import MegaMenu from "./MegaMenu";
import { ArrowRight } from "lucide-react";
import { focusGroups } from "../../constants/navigation";

interface FocusGroupsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const FocusGroupsDropdown: React.FC<FocusGroupsDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <MegaMenu isOpen={isOpen}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-foreground mb-4 border-b pb-2 text-center">
            {focusGroups.links[0].title}
          </h3>
          <ul className="space-y-3">
            {focusGroups.links[0].links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 group ml-6"
                  onClick={onClose}
                >
                  <span className="w-6 flex items-center -ml-6">
                    <link.icon className="w-4 h-4" />
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 bg-secondary p-8 rounded-lg flex flex-col justify-center items-center text-center">
          <h3 className="font-semibold text-foreground text-2xl mb-4">
            Together, we're building an AI-powered India.
          </h3>
          <p className="text-muted-foreground text-lg mb-8">
            Join the movement
          </p>
          <button
            onClick={() => {
              window.location.href = "#register";
              onClose();
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap flex items-center gap-2 group"
          >
            <span>Register Now</span>
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </MegaMenu>
  );
};

export default FocusGroupsDropdown;
