import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = React.useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const handleScroll = React.useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    setScrollProgress(progress);
    toggleVisibility();
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative bg-background text-primary rounded-full p-3 shadow-lg hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-300"
        >
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 44 44">
            <circle
              className="text-primary/20"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="22"
              cy="22"
            />
            <circle
              className="text-primary"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="22"
              cy="22"
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
          </svg>
          <ChevronUp className="h-5 w-5 relative" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
