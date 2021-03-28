import axios from "axios";
import * as actionConstants from "./actionTypes";

function loginRequest() {
  return {
    type: actionConstants.LOGIN_REQUEST,
  };
}

function loginSuccess(response) {
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: response,
  };
}

function loginFailure(response) {
  return {
    type: actionConstants.LOGIN_FAILURE,
    payload: response,
  };
}

export function loginErrorSuccessReset() {
  return {
    type: actionConstants.LOGIN_ERROR_SUCCESS_RESET,
  };
}

export const makeLoginRequest = ( email, password) => (
  dispatch
) => {

  dispatch(loginRequest());
  axios
    .post("http://localhost:8002/api/login", {
      "email": email,
      "password": password
    })
    .then((res) => {
    // console.log(res)
       dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
     //console.log(err)
       dispatch(loginFailure(err.response.data.message));
    });
};