
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

// export const withPromotedLabel = (RestaurentCard) =>{
//   return () =>{
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurentCard/>
//       </div>
//     )
//   }
// }

export default RestaurentCard;
