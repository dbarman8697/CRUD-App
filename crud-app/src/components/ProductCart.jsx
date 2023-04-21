import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../redux/ProductReducer/action";

const ProductCart = ({ id, name, price, brand, category, image, gender }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id)).then(() => {
      dispatch(getProducts({}));
    });
  };

  return (
    <DIV>
      <img
        src={image}
        alt="product_image"
        style={{ width: "350px", height: "450px" }}
      />
      <h3>{name}</h3>
      <h3>Price: {price}</h3>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Gender: {gender}</p>
      <button onClick={handleDelete}>Delete</button>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </DIV>
  );
};

export default ProductCart;

const DIV = styled.div`
  border: 1px solid gray;
  padding: 10px;
  img {
    width: 100%;
  }
`;
