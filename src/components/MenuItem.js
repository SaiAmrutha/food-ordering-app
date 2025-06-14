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

export default MenuItem;
