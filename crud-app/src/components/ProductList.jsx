import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/ProductReducer/action";
import ProductCart from "./ProductCart";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [serachParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const location = useLocation();

  console.log(location);
  // console.log(products);
  // console.log(serachParams.getAll("gender"));
  // console.log(serachParams.getAll("category"));

  let obj = {
    params: {
      gender: serachParams.getAll("gender"),
      category: serachParams.getAll("category"),
      _sort: serachParams.get("order") && "price",
      _order: serachParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);

  return (
    <DIV>
      {products.length > 0 &&
        products.map((el) => {
          return <ProductCart key={el.id} {...el} />;
        })}
    </DIV>
  );
};

export default ProductList;

const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;
