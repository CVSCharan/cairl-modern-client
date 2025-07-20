import React, { useState } from "react";
import { Link } from "react-router-dom";

interface DropdownButtonProps {
  isActive: boolean;
  children: React.ReactNode;
  route?: string; // Optional route for direct navigation
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  isActive,
  children,
  route,
  onKeyDown,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Common content for both button and link
  const content = (
    <>
      <span className="relative inline-block">
        {children}
        <span
          className={`absolute -bottom-1 left-0 w-full h-0.5 bg-foreground transform transition-transform duration-300 origin-right rounded-full ${
            isActive || isHovered ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </span>
      <svg
        className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${
          isActive ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </>
  );

  // Common class names
  const commonClassNames = `flex items-center text-base font-medium transition-all duration-300 ${
    isActive ? "text-ai-blue-dark" : "text-ai-gray-dark hover:text-ai-blue-dark"
  }`;

  // Common hover handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // If route is provided, render as Link, otherwise as button
  return route ? (
    <Link
      to={route}
      className={commonClassNames}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={onKeyDown}
    >
      {content}
    </Link>
  ) : (
    <button
      className={commonClassNames}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={onKeyDown}
    >
      {content}
    </button>
  );
};

export default DropdownButton;
