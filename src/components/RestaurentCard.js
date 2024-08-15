// import { CDN_URL } from "../utils/constants";
// const RestaurentCard = (props) =>{
//   // console.log(props);
//   const {resName} = props;
//   const {name,cuisines,avgRating} = resName?.info
//   // const { deliveryTime} = resName?.info.sla
 

  
//   return (
//     <div className="restaurent-card m-4 p-4 bg-gray-200 w-[250px]  rounded-lg">
//       <img className="res-logo rounded-lg h-42 "alt='Hangout'src={CDN_URL + resName.info.cloudinaryImageId}/>
//       <h2 className="font-bold text-lg">{name}</h2>
//       <h4 className="">{cuisines.join(',')}</h4>
//       <h4 >{avgRating}</h4>
//       {/* <h4>{deliveryTime} mins</h4> */}

//     </div>
//   )
// }

// export default RestaurentCard

import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resName } = props;
  const { name, cuisines, avgRating } = resName?.info;

  return (
    <div className="restaurent-card m-4 p-4 bg-white shadow-lg w-[335px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ">
      <img
        className="res-logo rounded-lg h-40 w-full object-cover"
        alt="Hangout"
        src={CDN_URL + resName.info.cloudinaryImageId}
      />
      <div className="p-2">
        <h2 className="font-bold text-lg truncate">{name}</h2>
        <h4 className="text-sm text-gray-600 truncate hover:overflow-visible hover:whitespace-normal">{cuisines.join(', ')}</h4>
        <h4 className="text-sm font-semibold text-yellow-500">{avgRating} ⭐</h4>
        {/* <h4 className="text-sm text-gray-500">{deliveryTime} mins</h4> */}
      </div>
    </div>
  );
};

export default RestaurentCard;
