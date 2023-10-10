import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingDown(st > lastScrollTop);
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return isScrollingDown;
};

export default useScrollDirection;
