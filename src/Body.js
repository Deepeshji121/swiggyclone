import ResturantCard from "./Card";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
function FilterData(searchText,restaurants){
 const FilterData = restaurants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
 return FilterData;
}
const Body = () => {
  const[allRestaurants,setAllRestaurantsData] = useState([]);
  const[filteredRestaurants,setFilteredRestaurantsData] = useState([]);
  const[searchText,setSearchText] = useState("");
  useEffect(()=>{
    getRestaurants();
  },[]);
  async function getRestaurants(){
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await response.json();
    setAllRestaurantsData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantsData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  console.log(allRestaurants)
  const isonline =useOnline();
  if(!isonline){
    return(<><alert type="alert">plese check your network</alert></>)
  }
  if(!allRestaurants) return null;
  return(allRestaurants.length===0) ?(<ShimmerUi/>): (
    <>
      <div className=" max-w-screen flex flex-col gap-3 mx-12 ">
        <div className="flex flex-wrap gap-2 ">
          <input 
            className=" w-[260px] h-[30px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type="text" 
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e)=>{setSearchText(e.target.value)}} 
            />
          <button 
            className="w-[90px] h-[30px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 pb-1 text-center me-2 mb-2 " 
            onClick={()=>
            {const data =FilterData(searchText,allRestaurants); 
            setFilteredRestaurantsData(data);
            }}>Search</button>  
        </div>
        <div className="flex flex-wrap gap-4">
          {(filteredRestaurants.length ===0)?(<h1>no such resturant found</h1>):
          (filteredRestaurants.map(function (restaurant) {
            return <Link to={"/resturant/"+restaurant.info.id} key={restaurant.info.id} ><ResturantCard {...restaurant.info} /></Link>;
          }))}
        </div>
      </div>
    </>
  );
};
export default Body;
