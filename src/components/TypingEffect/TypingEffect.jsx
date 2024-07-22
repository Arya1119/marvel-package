import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ text, speed = 150, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index < text.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (index === text.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (isDeleting) {
      if (index > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
      }
    }
  }, [index, isDeleting, text, speed, delay]);

  return <span className="typing-effect">{displayedText}</span>;
};

export default TypingEffect;
