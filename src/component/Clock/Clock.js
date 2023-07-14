import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getRotationStyle = (rotation) => {
    return {
      transform: `rotate(${rotation}deg)`,
    };
  };

  const calculateRotation = (value, total) => {
    return (value / total) * 360;
  };

  const hoursRotation = calculateRotation(time.getHours() % 12, 12);
  const minutesRotation = calculateRotation(time.getMinutes(), 60);
  const secondsRotation = calculateRotation(time.getSeconds(), 60);

  return (
    <div className="rotating-clock">
      {/* <img src="https://dl.dropbox.com/s/f3b3lyanili7zl2/clock%20template-01.svg?raw=1" alt="sory" /> */}
      <div className="hour-hand" style={getRotationStyle(hoursRotation)} />
      <div className="minute-hand" style={getRotationStyle(minutesRotation)} />
      <div className="second-hand" style={getRotationStyle(secondsRotation)} />
    </div>
  );
};

export default Clock;
