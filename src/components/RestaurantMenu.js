import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      try {
        // const response = await fetch(MENU_API + resId);
        const response = await fetch(MENU_API(resId));
        const json = await response.json();
        console.log(json?.data?.cards);
        const restaurantData = json?.data?.cards?.find((item) =>
          item?.card?.card["@type"]?.includes("food.v2.Restaurant")
        )?.card?.card?.info;

        const menuData = json?.data?.cards
          ?.find((obj) => obj?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (obj) =>
              obj?.card?.card["@type"]?.includes("ItemCategory") ||
              obj?.card?.card["@type"]?.includes("NestedItemCategory")
          );

        const organizedMenuData = menuData?.map((item) => {
          const type = item?.card?.card?.["@type"];
          const title = item?.card?.card?.title || [];
          const itemCards = item?.card?.card?.itemCards || [];
          const categories = item?.card?.card?.categories || [];

          if (type?.includes("NestedItemCategory")) {
            return {
              title,
              type: "nested",
              categories: categories?.map((subcategory) => {
                return {
                  title: subcategory?.title,
                  itemCards: subcategory?.itemCards,
                };
              }),
            };
          } else {
            return {
              title,
              type: "item",
              itemCards,
            };
          }
        });

        setResInfo(restaurantData);
        setResMenu(organizedMenuData);
      } catch (err) {}
    };
    fetchRestaurantMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name, locality, avgRating } = resInfo;
  return (
    <div>
      <h1>restaurant menu page {resId}</h1>
      {/* rest menu info */}
      <h2>{name}</h2>
      <p>Locality : {locality}</p>
      <p>Ratings : {avgRating}</p>
      {/* res menu categories */}
      {resMenu?.map((category) =>
        category?.type === "item" ? (
          <ItemCategory key={category?.title} data={category} />
        ) : (
          <NestedItemCategory key={category?.title} data={category} />
        )
      )}
    </div>
  );
};

const ItemCategory = (props) => {
  const { title, itemCards } = props?.data;
  return (
    <div>
      <h2 className="text-2xl font-bold p-5 border border-blue-800 rounded-lg">
        {title} ({itemCards?.length})
      </h2>
      <ul className="px-5 py-2 list-disc space-y-10">
        {itemCards?.map((item) => (
          <MenuItem key={item?.card?.id} menuInfo={item?.card?.info} />
        ))}
      </ul>
    </div>
  );
};

const NestedItemCategory = (props) => {
  const { title, categories } = props?.data;
  return (
    <div>
      <h2 className="text-2xl font-bold p-5 rounded-lg">{title}</h2>
      <div className="mx-10">
        {categories?.map((subcategory) => (
          <div key={subcategory?.title}>
            <h3>
              {subcategory?.title} ({subcategory?.itemCards?.length})
            </h3>
            <ul>
              {subcategory?.itemCards?.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  menuInfo={item?.card?.info}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const MenuItem = (props) => {
  const { name, price, defaultPrice, description, imageId } = props?.menuInfo;
  const RESTAURANT_MENU_IMG =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  return (
    <li className="flex justify-between">
      <div>
        <h1 className="font-bold">{name}</h1>
        {price && <span>Rs {price / 100}</span>}
        {defaultPrice && <span>Rs {defaultPrice / 100}</span>}
        {description && <p className="w-1/2">{description}</p>}
      </div>
      <div className="w-40 h-40">
        {imageId && (
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={RESTAURANT_MENU_IMG + imageId}
          />
        )}
      </div>
    </li>
  );
};

export default RestaurantMenu;
