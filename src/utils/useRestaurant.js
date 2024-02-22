import { useState, useEffect } from "react";
const useRestaurant = (resid) => {
  const [restaurantData, setRestaurantData] = useState({});
  useEffect(() => {
    getRestaurantsData();
  }, []);
  async function getRestaurantsData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=" +
        resid +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await response.json();
    console.log(data);
    setRestaurantData(data?.data?.cards[0]?.card?.card?.info);
    console.log(data);
  }
  return restaurantData;
};
export default useRestaurant;