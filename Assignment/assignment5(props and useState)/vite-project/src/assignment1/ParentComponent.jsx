

import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import TextInput from './TextInput';
import ToggleSwitch from './ToggleSwitch';
import TOdoList from './TOdoList';

function ParentComponent() {
    const [selectedColor, setSelectedColor] = useState('#ffffff'); // Default color is white

    const handleColorChange = (color) => {
      setSelectedColor(color); // Update the color in the parent state
    };

  const [text, setText] = useState('');

  const handleInputChange = (value) => {
    setText(value);
  };

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  const todos = ['Buy groceries', 'Walk the dog', 'Do the laundry'];

  return (
    <div>
        <h1>Color Picker</h1>
      <ColorPicker onColorChange={handleColorChange} />
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: selectedColor }}>
        Selected Color: {selectedColor}
      </div>

      <h1>Controlled Text Input</h1>
      <TextInput onInputChange={handleInputChange} />
      <p>Current Input: {text}</p>

      <h1>Toggle Switch</h1>
      <ToggleSwitch toggleState={toggleSwitch} />
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>

      <h1>Todo List</h1>
      <TOdoList todos={todos} />
    </div>
  );
}

export default ParentComponent;
