import { CDN_URL } from "./Config";

const ResturantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  sla,
}) => {
  return (
    <div className="max-w-sm w-[300px] h-[320px]  flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700  font-Basis Grotesque Pro ">
      <img
        className="w-[280px] h-[180px] mt-3 mx-2 object-cover  bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="w-[280px] h-[180px] mt-2 pt-2 py-3 px-3 pb-2 gap-2 ">
        <h2 className=" font-bold text-xl">{name}</h2>
        <div className="font-bold flex gap-1">
          {avgRating}
          <span className=" flex mt-2 justify-center items-center w-2 h-2 bg-black rounded-full font-bold   "></span>
          <span className="font-bold text-balance">{sla.deliveryTime} mins</span>
          
        </div>
        <div>
            <h3 className="truncate  font-semibold ">{cuisines.join(" , ")}</h3>
        </div>
      </div>
    </div>
  );
};
export default ResturantCard;
