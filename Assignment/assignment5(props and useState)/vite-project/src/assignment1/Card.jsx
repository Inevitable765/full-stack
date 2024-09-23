// Question 2: Multiple Props
// Build a `ProfileCard` component that takes `name`, `age`, and `location` as props and displays them
// in a card layout.


import React from 'react'

function Card({name, age, location}) {
  return (
    <div style={{display: 'inline-block'}}>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', maxWidth: '200px' }}>
            <h2>Name {name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    </div>
  )
}

export default Card