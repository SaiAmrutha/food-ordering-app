const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    sla,
    deliveryTime,
    cuisines,
  } = resData.info || {};
  console.log(resData);
  return (
    <div className="m-4 p-4 w-[250px] rounded-2xl bg-gray-200 hover:bg-blue-400">
      <img
        className="rounded-2xl"
        alt="res-logo"
        src={
          cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${cloudinaryImageId}`
            : "https://via.placeholder.com/150"
        }
      />
      <h3 className="font-bold py-2 text-2xl">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
