import React from 'react'

function Card({heading,discription}) {
  return (
    <div className='w-40 h-40 bg-blue-500 text-center p-3 m-10'>
        <h1>{heading}</h1>
        <p>{discription}</p>
    </div>
  )
}

export default Card