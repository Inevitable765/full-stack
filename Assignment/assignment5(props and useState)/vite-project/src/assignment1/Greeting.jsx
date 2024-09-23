// Question 1: Simple Props
// Create a functional component called `Greeting` that accepts a `name` prop and displays a greeting
// message, e.g., 'Hello, [name]!'.

import React from 'react'

function Greeting({name}) {
  return (
    <div>
      <h1 className=''>Hello, {name}!</h1>
    </div>
  )
}

export default Greeting