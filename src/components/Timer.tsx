import React, { useState, useEffect } from 'react';
import { useTestContext } from '../context/TestContext';
import './timer.css';
import { TimerProps } from '../dataStructure';

const Timer: React.FC<TimerProps> = ({ durationInSeconds, onTimeout }) => {
  const { progress, setProgress } = useTestContext();
  const [timeLeft, setTimeLeft] = useState(progress.currentTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          onTimeout(); // Вызываем колбэк по истечении времени
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [durationInSeconds, onTimeout]);

  useEffect(() => {
    setProgress({
      ...progress,
      currentTime: timeLeft
    });
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return <div className="time-border">{formatTime(timeLeft)}</div>;
};

export default Timer;
