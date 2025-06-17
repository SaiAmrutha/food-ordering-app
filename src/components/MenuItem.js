import { useDispatch } from "react-redux/";
import { addItem } from "../utils/cartSlice";
import { RESTAURANT_MENU_IMG } from "../utils/constants";

const MenuItem = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatching an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        const { name, price, defaultPrice, description, imageId } =
          item?.card?.info;
        return (
          <div
            key={item.card.info.id}
            className="flex justify-between border-blue-500 border-b-3"
          >
            <div className="w-9/12">
              <h1 className="font-bold">{name}</h1>
              {price && <span>Rs {price / 100}</span>}
              {defaultPrice && <span>Rs {defaultPrice / 100}</span>}
              {description && <p className="w-1/2">{description}</p>}
            </div>
            <div className="w-40 h-40">
              <button
                className="p-2 mx-12 my-30 rounded-lg bg-black text-white shadow-lg absolute"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              {imageId && (
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={RESTAURANT_MENU_IMG + imageId}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuItem;
