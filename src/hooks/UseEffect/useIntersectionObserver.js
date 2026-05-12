import { useState, useEffect } from "react";

/**
 * useIntersectionObserver:
 * Element ekranga (viewport) kirganini aniqlaydi. 
 * Lazy loading yoki Infinite Scroll uchun ishlatiladi.
 */
function useIntersectionObserver(elementRef, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef, options]);

  return isIntersecting;
}

export default useIntersectionObserver;
