import axios from "axios";
import {
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
} from "./actionTypes";

const getCitiesRequest = () => {
  return {
    type: GET_CITIES_REQUEST,
  };
};

const getCitiesSuccess = (payload) => {
  return {
    type: GET_CITIES_SUCCESS,
    payload: payload,
  };
};

const getCitiesFailure = () => {
  return {
    type: GET_CITIES_FAILURE,
  };
};

export const makeGetCitiesRequest = () => (dispatch) => {
  dispatch(getCitiesRequest());
  axios
    .get("http://localhost:8002/api/cities")
    .then((res) => dispatch(getCitiesSuccess(res.data)))
    .catch((err) => dispatch(getCitiesFailure()));
};