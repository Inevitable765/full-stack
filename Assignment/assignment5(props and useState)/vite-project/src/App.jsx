import React from 'react'
import Greeting from './assignment1/Greeting'
import Card from './assignment1/Card'
import StatusMessage from './assignment1/StatusMessage'
import Count from './assignment1/Count'
import LikeButtoon from './assignment1/LikeButtoon'
import Timer from './assignment1/Timer'
import ParentComponent from './assignment1/ParentComponent'

function App() {
  return (
    <div>
      <Greeting name={'vishal'}/>
      <Card name='vishal' age='18' location= 'udaipur'/>
      <Card name='vishal' age='18' location= 'udaipur'/>
      <StatusMessage status="success" />
      <StatusMessage status="error" />
      <Count />
      <LikeButtoon like={10} />
      <Timer start={100}/>
      <ParentComponent />
    </div>
  )
}

export default App