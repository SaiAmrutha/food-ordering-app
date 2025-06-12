const RestaurantCategories = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // console.log("click");
    setShowItems(!showItems);
  };

  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 bg-amber-200 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{data.title}</span>
          <span>🔽</span>
        </div>
        {data?.itemCards}
      </div>
    </div>
  );
};

export default RestaurantCategories;
