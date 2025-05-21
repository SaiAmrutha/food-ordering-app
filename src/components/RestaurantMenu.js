import { useEffect, useState } from "react";
import { useParams } from "../../node_modules/react-router-dom/dist/index";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restoInfo, setRestoInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=23678&catalog_qa=undefined&query=Burger&submitAction=ENTER" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestoInfo(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    restoInfo?.cards[2]?.card?.card?.info;
  //   const { cuisines } =
  //   , cuisines, costForTwoMessage } =
  // restoInfo?.cards[2]?.card?.card?.info;
  //   console.log(cuisines);

  if (restoInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
