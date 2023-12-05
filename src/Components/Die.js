import React from 'react'

function Die(props) {
  
 
  return (
    <>
      <div onClick={() => props.Changebool(props.id)} className= {props.isHeld? 'item2':'item'}>
         <div className = {props.isHeld? 'die-num2':'die-num'}>{props.value}</div>
      </div>
       
    
    </>
    
  )
}

export default Die