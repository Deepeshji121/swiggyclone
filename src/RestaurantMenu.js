import React from "react";
import useRestaurant from "./utils/useRestaurant";
import { useParams } from "react-router-dom";
import { CDN_URL } from "./Config";
const RestaurantMenu =()=>{
    const {resid}=useParams();
     const allRestaurantsMenu= useRestaurant(resid)

    // const[allRestaurantsMenu,setAllRestaurantsMenu] = useState({});
    // useEffect(()=>{
    //     getAllRestaurantsMenu();
    // },[]);
    // async function getAllRestaurantsMenu(){
    //     const response= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER");
    //     const data= await response.json();
    //     console.log(data);
    //     setAllRestaurantsMenu(data?.data?.cards[0]?.card?.card?.info)
    //     console.log(data)
    // }
    // console.log(allRestaurantsMenu)
    return(
        <div>
        <img src={CDN_URL+allRestaurantsMenu.cloudinaryImageId}/>
          <h1>resturant id: {allRestaurantsMenu.id}</h1>
          <div>{allRestaurantsMenu.name}</div>
          <div>{allRestaurantsMenu.costForTwoMessage}</div>
          <div>{allRestaurantsMenu.city}</div>
          <div>{allRestaurantsMenu.locality}</div>

        </div>
    )
}
export default RestaurantMenu;