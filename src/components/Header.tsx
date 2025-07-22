import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DropdownButton from "./header/DropdownButton";
import MobileMenu from "./header/MobileMenu";
import { navigationData } from "../constants/navigation";
import AdvancedDropdown from "./header/AdvancedDropdown";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeAllDropdowns();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllDropdowns();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (dropdownName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Increased delay for better UX
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

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent, dropdownName: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDropdownToggle(dropdownName);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/70 shadow-md backdrop-blur-sm"
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
                className="h-12 w-auto"
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/cairl_logo_sx9gcw.png"
                alt="CAiRL"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" onMouseLeave={handleMouseLeave}>
            {navigationData.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label.toLowerCase())}
              >
                <DropdownButton
                  isActive={activeDropdown === item.label.toLowerCase()}
                  route={item.route}
                  onClick={closeAllDropdowns}
                  onKeyDown={(e: React.KeyboardEvent) =>
                    handleKeyDown(e, item.label.toLowerCase())
                  }
                >
                  {item.label}
                </DropdownButton>
                <AdvancedDropdown
                  isOpen={activeDropdown === item.label.toLowerCase()}
                  onClose={closeAllDropdowns}
                  items={item.links}
                />
              </div>
            ))}
          </nav>

          {/* Contact & CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4 cursor-pointer">
            <Link
              to="/engage-with-us"
              className={`px-4 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap ${
                isScrolled
                  ? "bg-background text-foreground hover:bg-foreground hover:text-background"
                  : "bg-secondary text-foreground hover:bg-foreground hover:text-background"
              }`}
              onClick={closeAllDropdowns}
            >
              Engage with us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-40">
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
        isScrolled={isScrolled}
      />
    </header>
  );
};

export default Header;