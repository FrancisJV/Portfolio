import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section based on scroll position
 * @param {string[]} sectionIds - Array of section element IDs to observe
 * @param {number} offset - Offset from viewport top in pixels
 * @returns {string} - Active section ID
 */
export function useScrollSpy(sectionIds = [], offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'hero');

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
