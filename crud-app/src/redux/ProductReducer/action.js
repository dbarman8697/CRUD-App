import axios from "axios";
import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

export const addProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/products", newProduct)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  console.log(paramObj);
  return axios
    .get("http://localhost:8080/products", paramObj)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  let payload = [];

  axios.get("http://localhost:8080/products").then((res) => {
    payload = res.data.filter((el) => el.id !== id);
  });

  console.log(payload);

  // data.then((res) => {
  //   console.log(res);
  // });
  // payload = payload.filter((el) => el.id !== id);

  return axios
    .delete(`http://localhost:8080/products/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload });
      console.log(res);
      console.log(payload);
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const editProduct = (id, data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .patch(`http://localhost:8080/products/${id}`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: PATCH_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
