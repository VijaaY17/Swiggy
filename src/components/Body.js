import RestaurentCard from "./RestaurentCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Body = () =>{
 

const[listOfRestaurants,setlistOfRestaurants] = useState([])
const[searchtext,setsearchtext] = useState("")
const[filteredres,setfilteredres] = useState([])
useEffect(() =>{
 
  fetchData()

},[])


const fetchData = async() =>{
  const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.060285&lng=76.94577799999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  const json = await response.json();
  console.log(json)

  setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setfilteredres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

const onlineStatus = useOnlineStatus()
if(!onlineStatus) return <h1>Check your internet connection</h1>


if(listOfRestaurants.length===0)
  {
    return <Shimmer/>
  }

  return (
    <div className="body">
        <div className="filter-button">
          <input  type="text"
           className="input-box border border-solid border-black ml-2"
           value={searchtext}
           onChange={(e) => {
            setsearchtext(e.target.value)
           }}
           />
          <button className="search mx-4 py-[1] px-4 my-2 bg-green-200"
          onClick={() =>{
            const filtersearch = listOfRestaurants.filter((res) =>  res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
            setfilteredres(filtersearch)
            
          }}

          >Search</button>
          <button className="top-rated-res bg-orange-200 px-4 py-[1]" onClick={() => {
            const filteredlist = listOfRestaurants.filter((res) => res.info.avgRating >4)
            setlistOfRestaurants(filteredlist)
          }}>
            Top Rated Restaurants
            </button>
        </div>
       
      <div className="restaurent-container flex flex-wrap">
        {/* restaurant cards */}
        {
          filteredres.map((restaurent) => (
            
           <Link to={"/restaurants/" + restaurent.info.id}key={restaurent.info.id}><RestaurentCard resName={restaurent} /></Link>
          ))
        }

      </div>


    </div>
  )
}
export default Body