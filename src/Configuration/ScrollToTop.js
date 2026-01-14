import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { RxDoubleArrowUp } from 'react-icons/rx';

const ScrollToTop = () => {
  // handling button visibility state.
  const [showToTopButton, setShowToTopButton] = useState(false);

  // effect to track button visibility state.
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 700) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    });
  }, []);

  // function to scroll to top of page.
  const ScrollToPageTopFunc = () => {
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="top-to-bottom">
      {showToTopButton && (
        <Button
          variant="custom"
          className="scroll-to-top-btn"
          onClick={ScrollToPageTopFunc}
        >
          {' '}
          <RxDoubleArrowUp />{' '}
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
