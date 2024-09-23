// Question 4: useState Basics
// Create a `Counter` component that uses `useState` to track and display a count. Include buttons to
// increment and decrement the count.


import React from 'react'
import { useState } from "react";

function Count() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }

  return (
    <div>
        <button onClick={handleDecrement}>decrement</button>
        <label>{count}</label>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Count