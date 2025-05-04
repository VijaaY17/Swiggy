
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null); // Initialize as null

  const params = useParams();
  // console.log(params);

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

  
  const name = resInfo.cards?.[2]?.card?.card?.info?.name || "Restaurant Name";
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ;
  // console.log(itemCards)
  console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const category = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log(resInfo)
console.log(category)
  return (
    <div className="text-center my-4">
      <h1>{name}</h1>
      <h1 className="my-2">Menu</h1>
      {category.map((categories,index)=>(
        < RestaurentCategory key={index} data = {categories.card.card}/>
      ))}
      
       
      
    </div>
  );
};

export default RestaurentMenu;

