import React from 'react'
import "./App.css";
function Card({notes}) {
   console.log(notes)
  return (
   
    <div className='card-component'>
      <div>
        {notes.title}
      </div>
      <div>
        {notes.details}
      </div>
    </div>
  )
}

export default Card