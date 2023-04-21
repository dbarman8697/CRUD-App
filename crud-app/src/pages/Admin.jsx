import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../redux/ProductReducer/action";

const initialState = {
  name: "",
  image: "",
  brand: "",
  price: "",
  category: "",
  gender: "",
};

export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addProduct(product));
    setProduct(initialState);
  };

  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          placeholder="Product Name"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          placeholder="Product Image"
          name="image"
          value={product.image}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          name="brand"
          placeholder="Product Brand"
          value={product.brand}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={(e) => handleChange(e)}
        />

        <select
          name="category"
          className="category-select"
          value={product.category}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="shoes">Shoes</option>
        </select>

        <select
          name="gender"
          className="gender-select"
          value={product.gender}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Gender</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid gray;
  padding: 40px;
  margin-bottom: 40px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  input {
    height: 40px;
    font-size: larger;
    width: 100%;
  }

  select {
    height: 40px;
    font-size: larger;
    width: 100%;
  }

  button {
    width: 50%;
    height: 35px;
    cursor: pointer;
    border: none;
  }
`;
