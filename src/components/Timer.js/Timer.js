"use client";
import React, { useState, useEffect } from 'react';

const Timer = ({ minutes, seconds }) => {
    console.log(minutes, seconds);
  const [timeRemaining, setTimeRemaining] = useState(minutes * 60 + seconds);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialTime = localStorage.getItem('remainingMinute');
      setTimeRemaining(Number(initialTime));

      const timer = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(prevTime => prevTime - 1);
          localStorage.setItem('remainingMinute', timeRemaining - 1);
        } else {
          clearInterval(timer);
          handleSubmitQuiz();
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeRemaining, minutes]);

  const handleSubmitQuiz = () => {
    // Handle submission
  };

  const remainingMinutes = Math.floor(timeRemaining / 60);
  const remainingSeconds = timeRemaining % 60;

  return (
    <p className="Time" style={{marginTop:"7%",textAlign:"center" ,color:"red"}}>
      Time Remaining: {remainingMinutes} minutes {remainingSeconds} seconds
    </p>
  );
};

export default Timer;

//