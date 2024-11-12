'use client'
import React, { useState, useEffect } from 'react';
import { RiAlarmLine } from "react-icons/ri";

const Counter = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [time, setTime] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      // Decrement seconds
      if (time.seconds > 0) {
        setTime((prevTime) => ({ ...prevTime, seconds: prevTime.seconds - 1 }));
      } 
      // If seconds reach 0, decrement minutes and reset seconds
      else if (time.minutes > 0) {
        setTime((prevTime) => ({
          hours: prevTime.hours,
          minutes: prevTime.minutes - 1,
          seconds: 59,
        }));
      }
      // If minutes and seconds reach 0, decrement hours
      else if (time.hours > 0) {
        setTime((prevTime) => ({
          hours: prevTime.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else {
        clearInterval(countdown); // Stop the countdown when all reach 0
      }
    }, 1000);

    return () => clearInterval(countdown); // Cleanup the interval on component unmount
  }, [time]);

  return (
    <span className='flex gap-1 items-center'>
      <RiAlarmLine />
      {String(time.hours).padStart(2, '0')}h {String(time.minutes).padStart(2, '0')}m {String(time.seconds).padStart(2, '0')}s
    </span>
  );
};

export default Counter;
