import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <div className='flex'>

      <Card heading={'heading1'} discription ={'Discription for card 1'}/>
      <Card heading={'heading2'} discription ={'Discription for card 2'}/>
      <Card heading={'heading3'} discription ={'Discription for card 3'}/>
      <Card heading={'heading4'} discription ={'Discription for card 4'}/>

    </div>
    </>
  )
}

export default App
