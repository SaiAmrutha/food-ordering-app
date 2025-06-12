import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, locality, avgRating } = resInfo;
  return (
    <div>
      <h1>restaurant menu page {resId}</h1>
      {/* rest menu info */}
      <h2 className="text-center font-bold">{name}</h2>
      <p className="text-center">Locality : {locality}</p>
      <p className="text-center">Ratings : {avgRating}</p>
      {/* {menuData.map((category) => (
        <RestaurantCategories />
      ))} */}
      <div>
        {/* res menu categories */}
        {resMenu?.map((category) =>
          category?.type === "item" ? (
            <ItemCategory key={category?.title} data={category} />
          ) : (
            <NestedItemCategory key={category?.title} data={category} />
          )
        )}
      </div>
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
            <span>🔽</span>
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
    <li className="flex justify-between border-blue-500 border-b-3">
      <div>
        <h1 className="font-bold">{name}</h1>
        {price && <span>Rs {price / 100}</span>}
        {defaultPrice && <span>Rs {defaultPrice / 100}</span>}
        {description && <p className="w-1/2">{description}</p>}
      </div>
      <div className="w-40 h-40">
        <button className="p-2 mx-12 my-30 rounded-lg bg-black text-white shadow-lg absolute">
          Add +
        </button>
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
