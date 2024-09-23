// Question 7: Updating Parent State from Child
// Create a `ColorPicker` component that allows the user to select a color. Pass a callback function via
// props to update the selected color in the parent component's state.


import React from 'react';

function ColorPicker({ onColorChange }) {
  const handleColorChange = (e) => {
    onColorChange(e.target.value); // Call the parent function to update color
  };

  return (
    <div>
      <label htmlFor="colorInput">Pick a color: </label>
      <input 
        type="color" 
        id="colorInput" 
        onChange={handleColorChange} 
      />
    </div>
  );
}

export default ColorPicker;
