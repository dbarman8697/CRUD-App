import axios from "axios";
import {
  STUDENT_REQUEST_FAILURE,
  STUDENT_REQUEST_PENDING,
  STUDENT_REQUEST_SUCCESS,
} from "./actionTypes";

const Student_Request_Pending = () => {
  return { type: STUDENT_REQUEST_PENDING };
};

const Student_Request_Success = (payload) => {
  return { type: STUDENT_REQUEST_SUCCESS, payload };
};

const Student_Request_Failure = () => {
  return { type: STUDENT_REQUEST_FAILURE };
};

export const getStudents = (paramObj) => (dispatch) => {
  dispatch(Student_Request_Pending());

  return axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,
      paramObj
    )
    .then((res) => {
      dispatch(Student_Request_Success(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(Student_Request_Failure());
    });
};
