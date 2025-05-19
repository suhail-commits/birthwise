import React, { useEffect, useRef } from 'react';
import '../styles/BirthwiseSection.css';

const BirthwiseSection: React.FC = () => {
  const birthwiseRef = useRef<HTMLDivElement>(null);
  const wiseRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            if (wiseRef.current) {
              wiseRef.current.classList.add('appear');
            }
          } else {
            entry.target.classList.remove('appear');
            if (wiseRef.current) {
              wiseRef.current.classList.remove('appear');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (birthwiseRef.current) {
      observer.observe(birthwiseRef.current);
    }

    return () => {
      if (birthwiseRef.current) {
        observer.unobserve(birthwiseRef.current);
      }
    };
  }, []);

  return (
    <div className="birthwise-container">
      <div className="birthwise-content" ref={birthwiseRef}>
        <h1 className="birthwise-text">
          birth<span className="wise-text" ref={wiseRef}>wise</span>
        </h1>
      </div>
      <div className="scroll-hint">
        <p>Continue scrolling</p>
        <div className="scroll-arrow">↓</div>
      </div>
    </div>
  );
};

export default BirthwiseSection;