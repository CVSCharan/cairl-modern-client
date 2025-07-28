import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Disable the browser's default scroll restoration
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const smoothScrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.hash) {
      setTimeout(() => {
        smoothScrollTo(location.hash.substring(1));
      }, 300); // Add a small delay
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
};

export default useSmoothScroll;
