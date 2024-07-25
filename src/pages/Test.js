// TextOverlapColorChange.jsx
import React, { useState, useEffect, useRef } from 'react';

const TextOverlapColorChange = () => {
  const [isOverlapping, setIsOverlapping] = useState(false);
  const divRef = useRef(null);
  const overlapDivRef = useRef(null);

  useEffect(() => {
    const handleOverlap = () => {
      const divRect = divRef.current.getBoundingClientRect();
      const overlapDivRect = overlapDivRef.current.getBoundingClientRect();

      // Check if the div overlaps with the overlapDiv
      const overlaps = !(
        divRect.right < overlapDivRect.left ||
        divRect.left > overlapDivRect.right ||
        divRect.bottom < overlapDivRect.top ||
        divRect.top > overlapDivRect.bottom
      );

      setIsOverlapping(overlaps);
    };

    // Listen for scroll or resize events
    window.addEventListener('scroll', handleOverlap);
    window.addEventListener('resize', handleOverlap);

    // Initial check
    handleOverlap();

    return () => {
      window.removeEventListener('scroll', handleOverlap);
      window.removeEventListener('resize', handleOverlap);
    };
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      {/* Overlap Div */}
      <div
        ref={overlapDivRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-200 z-10"
      >
        Overlap
      </div>

      {/* Main Div */}
      <div ref={divRef} className="relative">
        <div className={`text-4xl  mb-4 ${isOverlapping ? 'text-blue-500' : 'text-green-500'}`}>
          Text Changes Color
        </div>
        <p className={`text-lg ${isOverlapping ? 'text-blue-700' : 'text-green-700'}`}>
          Scroll or resize to see the text color change when overlapping the yellow div!
        </p>
      </div>
    </div>
  );
};

export default TextOverlapColorChange;
