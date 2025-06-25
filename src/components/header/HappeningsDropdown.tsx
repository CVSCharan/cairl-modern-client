import React from "react";
import MegaMenu from "./MegaMenu";
import { ArrowRight, Calendar, Video } from "lucide-react";

interface HappeningsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const HappeningsDropdown: React.FC<HappeningsDropdownProps> = ({ isOpen, onClose }) => {
  const sections = [
    {
      title: "Happenings",
      links: [
        { name: "Events", href: "/happenings#events" },
        { name: "Webinars", href: "/happenings#webinars" },
        { name: "Visual Journey", href: "/happenings#visual-journey" },
      ],
    },
  ];

  return (
    <MegaMenu isOpen={isOpen}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-foreground mb-4 border-b pb-2">
            {sections[0].title}
          </h3>
          <ul className="space-y-3">
            {sections[0].links.map((link) => (
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

        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="font-semibold text-foreground mb-4">Upcoming Event</h3>
          <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
            <Calendar className="w-12 h-12 text-muted-foreground" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">
            AI for a Better Future
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Join us for an exciting day of coding, collaboration, and innovation!
          </p>
          <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Register
          </button>
        </div>

        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="font-semibold text-foreground mb-4">Upcoming Webinar</h3>
          <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
            <Video className="w-12 h-12 text-muted-foreground" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">
            The Future of AI in Healthcare
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Learn from industry experts about the latest trends and applications.
          </p>
          <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Register
          </button>
        </div>
      </div>
    </MegaMenu>
  );
};

export default HappeningsDropdown;
