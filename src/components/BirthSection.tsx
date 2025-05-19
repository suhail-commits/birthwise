import React, { useEffect, useRef } from 'react';
import '../styles/BirthSection.css';

const BirthSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          } else {
            entry.target.classList.remove('appear');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="birth-container">
      <div className="birth-content" ref={textRef}>
        <h1 className="birth-text">birthwise</h1>
      </div>
    </div>
  );
};

export default BirthSection;