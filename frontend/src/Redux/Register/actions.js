import axios from "axios";
import {REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_RESET, REGISTER_SUCCESS} from "./actionTypes"

function registerRequest() {
  return {
    type: REGISTER_REQUEST,
  };
}

function registerSuccess(response) {
  return {
    type: REGISTER_SUCCESS,
    payload: response,
  };
}

function registerFailure(response) {
  return {
    type: REGISTER_FAILURE,
    payload: response,
  };
}

export const registerReset = () => {
  return {
    type: REGISTER_RESET,
  };
};

export const makeRegisterRequest = (userDetails) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post("http://localhost:8002/api/register" , userDetails)
    .then((res) => {
    console.log(res)
      //  dispatch(registerSuccess(res.data.message));
    })
    .catch((err) => {
      dispatch(registerFailure(err.response.data.message));
    });
};