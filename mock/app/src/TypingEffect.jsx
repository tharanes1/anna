import React, { useState, useEffect } from 'react';

function TypingEffect() {
  const text = "Welcome to my website!";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < text.length) {
       timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100); // 100ms delay between lett  ers
    }
    else{
        timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 1000); // 1.5 seconds pause after full text
    }
    return () => clearTimeout(timeout);

  }, [index]);

  return (
    <h1>{displayedText}<span className="cursor">|</span></h1>
  );
}

export default TypingEffect;
