import React from "react";
import MegaMenu from "./MegaMenu";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { happenings } from "../../constants/navigation";

interface HappeningsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const HappeningsDropdown: React.FC<HappeningsDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <MegaMenu isOpen={isOpen}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-foreground mb-4 border-b pb-2 text-center">
            {happenings.links[0].title}
          </h3>
          <ul className="space-y-3">
            {happenings.links[0].links.map((link) => (
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

        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="font-semibold text-foreground mb-4">Upcoming Event</h3>
          <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1751394883/Role_of_AIML_in_Life_Sciences_-_Raghavendra_f08iaa.png"
              alt="Upcoming Event"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h4 className="font-semibold text-foreground mb-2">
            CAIRL Learning Labs: AI in Life Sciences
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Join us for an exciting event on July 4th, 2025, focused on AI
            applications in genomics, drug discovery, and diagnostics.
          </p>
          <Link
            to="/happenings#upcoming-events"
            className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </MegaMenu>
  );
};

export default HappeningsDropdown;
