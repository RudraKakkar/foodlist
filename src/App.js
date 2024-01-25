import React from 'react'
import Foodlist from './components/Foodlist'

const App = () => {
  const fooditems = ["allu prantha","gobi prantha","muli prantha","balle balle prantha","burrah prantha","tera prantha"]
  return (
    <Foodlist item={fooditems}/>
  )
}

export default App