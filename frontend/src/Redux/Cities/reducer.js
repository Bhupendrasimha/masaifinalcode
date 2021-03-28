import {
    GET_CITIES_SUCCESS,
    GET_CITIES_FAILURE,
    GET_CITIES_REQUEST,
  } from "./actionTypes";
  
  const initState = {
    cities: [],
  
    isLoading: false,
    error: false,
    message: "",
  };
  
  export const citiesReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_CITIES_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_CITIES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          cities: payload,
        };
      case GET_CITIES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: true,
          message: "Oops! Try again later",
        };
  
      default:
        return state;
    }
  };