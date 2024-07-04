import axios from "axios";

export const fetchCart = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const res = await axios.get("/api/cart", {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch({ type: "FETCH_CART", payload: res.data });
};

export const addToCart = (productId, quantity) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    "/api/cart",
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  dispatch({ type: "ADD_TO_CART", payload: res.data });
};

export const removeFromCart = (productId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const res = await axios.delete(`/api/cart/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch({ type: "REMOVE_FROM_CART", payload: res.data });
};
