import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((store) => store.authReducer.isAuth);
  const err = useSelector((store) => store.authReducer.isError);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData)).then(() => {
      navigate(location.state);
    });

    setEmail("");
    setPassword("");
  };

  return (
    <DIV auth={auth} error={err}>
      <h2>{auth ? "Login Successfull!" : "Login to continue"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">LOGIN</button>
      </form>
    </DIV>
  );
};

export default Login;

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  border: 1px solid gray;
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    color: ${({ auth }) => (auth ? "green" : "red")};
  }

  input {
    height: 40px;
    border: ${({ error }) => (error ? "1px solid red" : "1px solid green")};
  }

  button {
    height: 35px;
  }
`;
