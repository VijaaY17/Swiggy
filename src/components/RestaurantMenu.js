// import { useEffect, useState } from "react"
// import Shimmer from "./Shimmer"
// import { useParams } from "react-router-dom"
// import { MENU_API } from "../utils/constants"

// const RestaurentMenu = () =>{
//   console.log("hi")

//   const[resInfo,setResInfo] = useState([])
//     // if(resInfo.length===0) return <Shimmer/>
//     const params = useParams()
//     console.log(params)
//     if(!resInfo) return <Shimmer/>
 
  

//   useEffect(() =>{
//     fetchMenu()

//   },[])

//   const fetchMenu = async() =>{
//     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.060285&lng=76.94577799999999&restaurantId=882511&catalog_qa=undefined&submitAction=ENTER")
//     const json = await data.json()
//     console.log(json)
//     setResInfo(json.data)
//     // json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
//   }
//   console.log(resInfo)

//   if(!resInfo) return <Shimmer/>

//   const{name} = resInfo.cards[2].card.card.info
//   const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card




//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>Menu</h1>
//       <ul>
      
        
//         {
//           itemCards.map((item => <li>{item.card.info.name} - {item.card.info.price/100}</li>))
//         }
       
//         <li>ColdDrinks</li>
//       </ul>
//     </div>
//   )
// }

// export default RestaurentMenu



import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null); // Initialize as null

  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + params.id);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  if (!resInfo) return <Shimmer />;

  // Safely access nested properties with optional chaining
  const name = resInfo.cards?.[2]?.card?.card?.info?.name || "Restaurant Name";
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div>
      <h1>{name}</h1>
      <h1>Menu</h1>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item, index) => (
            <li key={index}>{item.card.info.name} - {item.card.info.price / 100}</li>
          ))
        ) : (
          <li>No items available</li>
        )}
        <li>ColdDrinks</li>
      </ul>
    </div>
  );
};

export default RestaurentMenu;

