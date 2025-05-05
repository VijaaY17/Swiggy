// import { CDN_URL } from "../utils/constants"
// const ItemList = (props) =>{
//   const{item} = props
//   console.log(item)
  
//   return (
//     <div>
//       {item.map((items) =>(
//         <div  key={items.card.info.id}className="p-2 m-2 border-gray-200 border-b-2 text-left">
//           <div className="w-20 ">
//             <img src={CDN_URL+ items.card.info.imageId}/>
//           </div>
//           <div>
//         <span className="font-semibold">{items.card.info.name}</span>
//         <span> - ₹{items.card.info.price/100}</span>
        
//         </div>
//         <p>{items.card.info.description}</p>
        
//         </div>
        
      

//       ))}
//     </div>
//   )
// }
// export default ItemList

import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
  const dispatch = useDispatch()
  const handleAddItem = () => {
    dispatch(addItem('pizza'))

  }
  // const { item } = props;
  console.log(items)

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={items.card.info.id}
          className="p-4 border-b border-gray-200 flex justify-between items-center"
        >
          <div className="flex-1 text-left pr-4">
            <h3 className="font-semibold text-lg">{item.card.info.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.card.info.description}</p>
            <div className="mt-2 font-semibold text-green-600">
              ₹{item.card.info.price ? items.card.info.price / 100: item.card.info.defaultPrice/100}
            </div>
          </div>
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          {item.card.info.imageId && (
            <img
              className="w-full h-full object-cover"
              src={CDN_URL + item.card.info.imageId}
              alt="["
            />
          )}
            <button onClick={handleAddItem}className="absolute bottom-0 right-0 bg-white text-green-600 text-sm font-semibold py-1 px-3 rounded-tl-lg shadow">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;


