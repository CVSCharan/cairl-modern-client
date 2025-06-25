import React from "react";

interface DropdownButtonProps {
  isActive: boolean;
  children: React.ReactNode;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ isActive, children }) => {
  return (
    <button
      className={`flex items-center text-base font-medium transition-all duration-300 relative ${
        isActive
          ? "text-ai-blue-dark"
          : "text-ai-gray-dark hover:text-ai-blue-dark"
      }`}
      style={{ paddingBottom: '2px' }} // Space for the underline
    >
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
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
        style={{ transformOrigin: 'center' }}
      />
    </button>
  );
};

export default DropdownButton;
