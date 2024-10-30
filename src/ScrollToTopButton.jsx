
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scrollToTopButton">
       <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="m-1" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"></path><path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5"></path><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"></path><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path></svg>
      </button>
    )
  );
};

export default ScrollToTopButton;