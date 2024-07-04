import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/api/products");
  dispatch({ type: "FETCH_PRODUCTS", payload: res.data });
};

export const fetchProductDetail = (id) => async (dispatch) => {
  const res = await axios.get(`/api/products/${id}`);
  dispatch({ type: "FETCH_PRODUCT_DETAIL", payload: res.data });
};
