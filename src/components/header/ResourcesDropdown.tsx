import React from "react";
import MegaMenu from "./MegaMenu";
import { Book, Mic, FileText, Database, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

interface ResourcesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  const sections = [
    {
      title: "Knowledge Hub",
      links: [
        { name: "Blog", href: "/blogs", icon: Book },
        { name: "Podcast", href: "/podcasts", icon: Mic },
        { name: "Whitepaper", href: "/white-papers", icon: FileText },
      ],
    },
    {
      title: "AI Use Cases & Implementation",
      links: [
        {
          name: "Datasets for Innovation",
          href: "/resources#datasets",
          icon: Database,
        },
        {
          name: "Affordable AI Computing",
          href: "/resources#computing",
          icon: Cpu,
        },
      ],
    },
  ];

  return (
    <MegaMenu isOpen={isOpen}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-foreground mb-4 border-b pb-2 text-center">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 group ml-6"
                    onClick={onClose}
                  >
                    <span className="w-6 flex items-center -ml-6">
                      <link.icon className="w-4 h-4" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="font-semibold text-foreground mb-4">
            Featured Content
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 hover:bg-primary/10 p-2 rounded-r-md transition-all duration-300">
              <h5 className="font-semibold text-primary mb-1">Technology</h5>
              <p className="text-foreground text-sm mb-1">
                The Impact of Technology on the Workplace
              </p>
              <p className="text-muted-foreground text-xs flex items-center mt-2">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Energy Mission • August 16, 2022
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4 hover:bg-primary/10 p-2 rounded-r-md transition-all duration-300">
              <h5 className="font-semibold text-primary mb-1">
                MX E.V.™ - AI STARTUP
              </h5>
              <p className="text-foreground text-sm mb-1">
                Emerging In Chinese to Learn New Things
              </p>
            </div>
          </div>
        </div>
      </div>
    </MegaMenu>
  );
};

export default ResourcesDropdown;
