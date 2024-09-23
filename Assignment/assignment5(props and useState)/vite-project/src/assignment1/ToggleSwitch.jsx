// Question 9: Props as Functions
// Create a `ToggleSwitch` component. It should accept a `toggleState` prop which is a function. When
// the switch is clicked, it should call `toggleState` to update the parent component's state.

import React from 'react';

function ToggleSwitch({ toggleState }) {
  return (
    <button onClick={toggleState}>
      Toggle Switch
    </button>
  );
}

export default ToggleSwitch;