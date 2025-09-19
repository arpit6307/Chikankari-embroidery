import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Mouse ki position ko track karne ke liye event listener
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    // Hover effect ke liye event listeners
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Jin cheezon par hover effect chahiye, unhe yahaan select karein
    document.querySelectorAll('a, button, .gallery-card, .mosaic-item, .scroll-to-top-btn').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button, .gallery-card, .mosaic-item, .scroll-to-top-btn').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor ka inner dot */}
      <div
        className={`cursor-dot ${isHovering ? 'grow' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Cursor ki outer outline */}
      <div
        className={`cursor-outline ${isHovering ? 'grow' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
