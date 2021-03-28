import axios from "axios";
import {STATION_FAILURE, STATION_REQUEST, STATION_SUCCESS} from "./actionTypes"
import {
  GET_DISTRICT_REQUEST,
  GET_DISTRICT_SUCCESS,
  GET_DISTRICT_FAILURE,
} from "./actionTypes";

const getDistrictRequest = () => {
  return {
    type: GET_DISTRICT_REQUEST,
  };
};

const getDistrictSuccess = (payload) => {
  return {
    type: GET_DISTRICT_SUCCESS,
    payload: payload,
  };
};

const getDistrictFailure = () => {
  return {
    type: GET_DISTRICT_FAILURE,
  };
};


function StationRequest() {
  return {
    type: STATION_REQUEST,
  };
}

function StationSuccess(response) {
  return {
    type: STATION_SUCCESS,
    payload: response,
  };
}

function StationFailure(response) {
  return {
    type: STATION_FAILURE,
    payload: response,
  };
}

export const makeGetDistrictRequest = (id) => (dispatch) => {

  dispatch(getDistrictRequest());
  axios
    .post("http://localhost:8002/api/district", {"id": id})
    .then((res) => dispatch(getDistrictSuccess(res.data)))
    .catch((err) => dispatch(getDistrictFailure()));
};

export const makeStationRequest = (userDetails) => (dispatch) => {
  console.log(userDetails)
  dispatch(StationRequest());
  axios
    .post("http://localhost:8002/api/polling" , userDetails)
    .then((res) => {
      dispatch(StationSuccess(res.data));
    })
    .catch((err) => {
      dispatch(StationFailure(err.response.data.message));
    });
};