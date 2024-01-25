import React from 'react'
import FoodItems from './FoodItems'

const Foodlist = ({item}) => {
    if (item.length === 0){
        return <h1>
            no food available
        </h1>
    }
    else{
        return (
            <>
        
            <div className='container pt-4'>
            <h3 className='pb-3 mx-auto'>Food Items</h3>
            <ul className="list-group">
                {item.map((x) => {
                    return <FoodItems x={x}/>
                })}
                
                
                
            </ul>  
            </div> 
            </>
          )
    }

}

export default Foodlist