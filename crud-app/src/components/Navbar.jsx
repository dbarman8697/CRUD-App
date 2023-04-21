import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/ProductReducer/action";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  let ref = useRef();

  // console.log(ref);

  const paramObj = {
    params: {
      q: query && query,
    },
  };

  useEffect(() => {
    // console.log(ref.current);
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      dispatch(getProducts(paramObj));
    }, 1000);
  }, [query]);

  return (
    <DIV>
      <h1>Product List</h1>
      <Link to={"/"}>
        <h3>Home</h3>
      </Link>
      <Link to={"/add-product"}>
        <h3>Admin Page</h3>
      </Link>
      <Link to={"/login"}>
        <h3>Login</h3>
      </Link>
      <Link to={`/edit/1}`}>
        <h3>Edit</h3>
      </Link>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 10px;
  border-bottom: 1px solid gray;
`;
