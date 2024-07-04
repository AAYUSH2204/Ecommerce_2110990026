import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register, login } from "../redux/actions/authActions";

const AuthForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.name === "register") {
      dispatch(register(formData.username, formData.password));
    } else {
      dispatch(login(formData.username, formData.password));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={onChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Password"
      />
      <button type="submit" name="register">
        Register
      </button>
      <button type="submit" name="login">
        Login
      </button>
    </form>
  );
};

export default AuthForm;
