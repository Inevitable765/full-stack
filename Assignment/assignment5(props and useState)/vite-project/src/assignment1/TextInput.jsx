// Question 8: Controlled vs Uncontrolled Components
// Build a `TextInput` component with an input field. Use `useState` to control the input's value, and
// pass the current value back to the parent component using a prop.

// TextInput.js
import React, { useState } from 'react';

function TextInput({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value); // Pass the value back to the parent
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
    </div>
  );
}

export default TextInput;
