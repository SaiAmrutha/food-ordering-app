import { useState } from "react";
import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";

const RestaurantCategories = ({ data, isExpanded, onClick }) => {
  const [showItems, setShowItems] = useState(false);

  // const handleClick = () => {
  //   // console.log("click");
  //   setShowItems(!showItems);
  // };

  return (
    <div className="w-6/12 mx-auto my-4 bg-amber-200 shadow-lg p-4">
      {/* header */}
      <div className="flex justify-between cursor-pointer" onClick={onClick}>
        <span className="font-bold text-lg">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>{isExpanded ? "🔼" : "🔽"}</span>
      </div>
      {/* conditional rendering */}
      {isExpanded &&
        (data?.type === "item" ? (
          <ItemCategory data={data} />
        ) : (
          <NestedItemCategory data={data} />
        ))}
    </div>
  );
};
export default RestaurantCategories;
