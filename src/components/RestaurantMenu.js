import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import Shimmer from "./Shimmer";

const RestaurantMenu = ({ data }) => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, locality, avgRating, cuisines } = resInfo;
  return (
    <div>
      {/* <h1>restaurant menu page {resId}</h1> */}
      {/* rest menu info */}
      <h2 className="text-center font-bold">{name}</h2>
      <p className="text-center">Locality : {locality}</p>
      <p className="text-center">Ratings : {avgRating}</p>
      <p className="text-center">Cuisines : {cuisines.join(", ")}</p>
      {resMenu?.map((category, index) => (
        <RestaurantCategories
          key={category?.title}
          data={category}
          isExpanded={index === showIndex}
          onClick={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
