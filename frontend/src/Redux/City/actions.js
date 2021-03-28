import axios from "axios";
import {
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_CITY_FAILURE,
} from "./actionTypes";

const getCityRequest = () => {
  return {
    type: GET_CITY_REQUEST,
  };
};

const getCitySuccess = (payload) => {
  return {
    type: GET_CITY_SUCCESS,
    payload: payload,
  };
};

const getCityFailure = () => {
  return {
    type: GET_CITY_FAILURE,
  };
};

export const makeGetCityRequest = (city) => (dispatch) => {
console.log(city)
  dispatch(getCityRequest());
  axios
    .post("http://localhost:8002/api/city", {"cityName": city})
    .then((res) => dispatch(getCitySuccess(res.data)))
    .catch((err) => dispatch(getCityFailure()));
};