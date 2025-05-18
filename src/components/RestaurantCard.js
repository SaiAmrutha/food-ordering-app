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
  // ) => {
  // resData?.info || {};
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${cloudinaryImageId}`
            : "https://via.placeholder.com/150"
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}mins</h4>
    </div>
  );
};

export default RestaurantCard;
