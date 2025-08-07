import React from 'react'
import './GreetingCard.css';

function GreetingCard({name}) {
  return (
    <div className='greeting-card'>
      <h2>Hello, {name}! Welcome to React.</h2>
    </div>
  )
}

export default GreetingCard
