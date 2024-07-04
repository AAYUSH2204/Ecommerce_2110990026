import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      {cart.map((item) => (
        <div key={item.productId._id}>
          <h2>{item.productId.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemove(item.productId._id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
