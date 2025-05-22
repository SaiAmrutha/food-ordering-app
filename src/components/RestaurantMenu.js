import { useEffect, useState } from "react";
import { useParams } from "../../node_modules/react-router-dom/dist/index";
import { MENU_API1, MENU_API2 } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restoInfo, setRestoInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API1 + resId + MENU_API2);
    const json = await data.json();
    console.log("Full response:", json);
    console.log("Cards array:", json.data?.cards);
    console.log("Card 2:", json.data?.cards[2]);
    console.log("Restaurant info:", json.data?.cards[2]?.card?.card?.info);
    setRestoInfo(json.data);
  };

  if (restoInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restoInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards = [] } =
    restoInfo?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
  console.log(itemCards);

  return (
    <div className="menu">
      {/* <h1>{restoInfo?.cards[2]?.card?.card?.info?.name}</h1> */}
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
