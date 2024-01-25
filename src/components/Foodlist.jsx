import React from 'react'

const Foodlist = ({item}) => {
  return (
    <>

    <div className='container pt-4'>
    <h3 className='pb-3 mx-auto'>Food Items</h3>
    <ul className="list-group">
        {item.map((x) => {
            return <li className="list-group-item" >{x}</li>
        })}
        
        
        
    </ul>  
    </div> 
    </>
  )
}

export default Foodlist