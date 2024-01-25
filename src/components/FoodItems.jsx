import React from 'react'

const FoodItems = ({x}) => {
  return (
    <>
    
   <li key= {x} className="list-group-item" >{x}</li>
    </>
  )
  
}

export default FoodItems