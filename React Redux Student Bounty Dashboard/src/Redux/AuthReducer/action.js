import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const login_request = () => {
  return { type: LOGIN_REQUEST };
};

const login_success = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

const login_failure = () => {
  return { type: LOGIN_FAILURE };
};

export const login = (userData) => (dispatch) => {
  dispatch(login_request());

  return axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      dispatch(login_success(res.data.token));
      console.log(res.data.token);
    })
    .catch((err) => {
      dispatch(login_failure());
    });
};
