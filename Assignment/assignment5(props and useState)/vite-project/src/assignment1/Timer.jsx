// Question 6: State Initialization with Props
// Create a `Timer` component that accepts a `start` prop to set the initial time in seconds. Use
// `useState` to manage the timer's state and display the current time.

import React, { useState } from 'react';

function Timer({ start }) {
  const [time, setTime] = useState(start); // Initialize state with the `start` prop

  // Simulate a for loop using setTimeout
  function startCountdown() {
    for (let i = 1; i <= start; i++) {
      setTimeout(() => {
        setTime((prevTime) => prevTime - 1);  // Decrease time by 1 every second
      }, i * 1000); // Delay each update by i * 1000ms (1 second)
    }
  }

  return (
    <div>
      <h1>Time: {time} seconds</h1>
      <button onClick={startCountdown}>Start Countdown</button>
    </div>
  );
}

export default Timer;
