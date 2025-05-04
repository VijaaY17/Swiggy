import { useState } from "react"
import ItemList from "./ItemList"
const RestaurentCategory = (props) =>{
  const{title,itemCards} = props.data
  console.log(props.data)
  const[showItems,setshowItems] = useState(false)
  
  const handleClick = () =>{
    setshowItems(!showItems)

  }
  
  return (
    <div className="bg-gray-100 my-4 p-4 w-6/12  mx-auto shadow-lg ">
      <div className="flex justify-between cursor-pointer " onClick={handleClick}>
      <span className="font-extrabold">{title} ({itemCards.length})</span>
      
      <span>⬇️</span>
      </div>
      {/* Header */}
      {/* Body */}
      { showItems && <ItemList item = {itemCards}/>}
      
      
    </div>
  )
}

export default RestaurentCategory