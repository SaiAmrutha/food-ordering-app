const RestaurantCard = (props) => {
  const { resData } = props;

  const { clou, name, avgRating, costForTwo, deliveryTime } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-by-GraphicsFamily-scaled.jpg"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} for 2</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
