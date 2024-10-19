import { useEffect, useRef, useState } from 'react';
import './PuzzlePiece.css'; // Ensure this file contains the necessary styles

const PuzzlePiece = () => {
  const puzzleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry); // Debug log
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the animation triggers
        }
      });
    });

    if (puzzleRef.current) {
      observer.observe(puzzleRef.current);
    }

    return () => {
      if (puzzleRef.current) {
        observer.unobserve(puzzleRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-56" ref={puzzleRef}>
      {/* Background Puzzle Image */}
      <img src="/puzzle3.svg" alt="Puzzle background" className="w-full" />
      {/* Animated Puzzle Piece */}
      <img
        src="/puzzlePiece3.svg"
        alt="Puzzle piece"
        className={`absolute w-full  ${isVisible ? 'animate-drop' : 'opacity-0'}`} // Use opacity instead of hidden
        style={{
          top: isVisible ? '0' : '-100px', // Change top based on visibility
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  );
};

export default PuzzlePiece;
