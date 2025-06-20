import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../cartSlice";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-amber-300 rounded-2xl cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty, add items to your cart...</h1>
        )}
        <MenuItem items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
