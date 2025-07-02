import React from "react";
import { Link } from "react-router-dom";

interface DropdownButtonProps {
  isActive: boolean;
  children: React.ReactNode;
  route?: string; // Optional route for direct navigation
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ isActive, children, route }) => {
  // Common content for both button and link
  const content = (
    <>
      <span>{children}</span>
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
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-ai-blue-dark transform transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
        }`}
        style={{ transformOrigin: 'center' }}
      />
    </>
  );

  // Common class names
  const commonClassNames = `flex items-center text-base font-medium transition-all duration-300 relative ${
    isActive
      ? "text-ai-blue-dark"
      : "text-ai-gray-dark hover:text-ai-blue-dark"
  }`;

  // Common style
  const commonStyle = { paddingBottom: '2px' }; // Space for the underline

  // If route is provided, render as Link, otherwise as button
  return route ? (
    <Link
      to={route}
      className={commonClassNames}
      style={commonStyle}
    >
      {content}
    </Link>
  ) : (
    <button
      className={commonClassNames}
      style={commonStyle}
    >
      {content}
    </button>
  );
};

export default DropdownButton;
