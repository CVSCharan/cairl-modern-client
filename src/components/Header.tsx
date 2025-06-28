import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DropdownButton from "./header/DropdownButton";
import AboutDropdown from "./header/AboutDropdown";
import ServicesDropdown from "./header/ServicesDropdown";
import ResearchDropdown from "./header/ResearchDropdown";
import HappeningsDropdown from "./header/HappeningsDropdown";
import FocusGroupsDropdown from "./header/FocusGroupsDropdown";
import ResourcesDropdown from "./header/ResourcesDropdown";
import MobileMenu from "./header/MobileMenu";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center"
              onClick={closeAllDropdowns}
            >
              <img
                className="h-10 w-auto"
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/cairl_logo_sx9gcw.png"
                alt="CAiRL"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div onMouseEnter={() => handleMouseEnter("about")}>
              <DropdownButton isActive={activeDropdown === "about"}>
                About us
              </DropdownButton>
              <AboutDropdown
                isOpen={activeDropdown === "about"}
                onClose={closeAllDropdowns}
              />
            </div>
            <div onMouseEnter={() => handleMouseEnter("services")}>
              <DropdownButton isActive={activeDropdown === "services"}>
                Services
              </DropdownButton>
              <ServicesDropdown
                isOpen={activeDropdown === "services"}
                onClose={closeAllDropdowns}
              />
            </div>
            <div onMouseEnter={() => handleMouseEnter("research")}>
              <DropdownButton isActive={activeDropdown === "research"}>
                Research & Innovation
              </DropdownButton>
              <ResearchDropdown
                isOpen={activeDropdown === "research"}
                onClose={closeAllDropdowns}
              />
            </div>
            <div onMouseEnter={() => handleMouseEnter("happenings")}>
              <DropdownButton isActive={activeDropdown === "happenings"}>
                Happenings
              </DropdownButton>
              <HappeningsDropdown
                isOpen={activeDropdown === "happenings"}
                onClose={closeAllDropdowns}
              />
            </div>
            <div onMouseEnter={() => handleMouseEnter("focus-groups")}>
              <DropdownButton isActive={activeDropdown === "focus-groups"}>
                Focus Groups
              </DropdownButton>
              <FocusGroupsDropdown
                isOpen={activeDropdown === "focus-groups"}
                onClose={closeAllDropdowns}
              />
            </div>
            <div onMouseEnter={() => handleMouseEnter("resources")}>
              <DropdownButton isActive={activeDropdown === "resources"}>
                Resources
              </DropdownButton>
              <ResourcesDropdown
                isOpen={activeDropdown === "resources"}
                onClose={closeAllDropdowns}
              />
            </div>
          </nav>

          {/* Contact & CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact-us"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={closeAllDropdowns}
            >
              Contact
            </Link>
            <Link
              to="/engage-with-us"
              className="bg-secondary text-foreground hover:bg-foreground hover:text-background px-4 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              onClick={closeAllDropdowns}
            >
              Engage with us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden z-40">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-secondary focus:outline-none transition-colors duration-300"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeDropdown={activeDropdown}
        onDropdownToggle={handleDropdownToggle}
        onClose={closeAllDropdowns}
      />
    </header>
  );
};

export default Header;
