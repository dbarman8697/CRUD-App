import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editProduct } from "../redux/ProductReducer/action";

const EditPage = () => {
  const [price, setPrice] = useState("");
  const { id } = useParams();

  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = products.find((el) => el.id === +id);
    setPrice(data.price);
  }, []);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleEdit = () => {
    const data = { price };
    dispatch(editProduct(id, data));
    setPrice("");
  };

  return (
    <div>
      <h1>{id}</h1>
      <input type="number" value={price} onChange={handleChange} />
      <button onClick={handleEdit}>Update</button>
    </div>
  );
};

export default EditPage;
