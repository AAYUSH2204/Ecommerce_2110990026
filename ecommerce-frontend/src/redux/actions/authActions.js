import axios from "axios";

export const register = (username, password) => async (dispatch) => {
  const res = await axios.post("/api/register", { username, password });
  dispatch({ type: "REGISTER", payload: res.data });
};

export const login = (username, password) => async (dispatch) => {
  const res = await axios.post("/api/login", { username, password });
  localStorage.setItem("token", res.data.token);
  dispatch({ type: "LOGIN", payload: res.data });
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: "LOGOUT" };
};
