import {
    GET_CITY_SUCCESS,
    GET_CITY_FAILURE,
    GET_CITY_REQUEST,
  } from "./actionTypes";
  
  const initState = {
    city: [],
  
    isLoading: false,
    error: false,
    message: "",
  };
  
  export const cityReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_CITY_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_CITY_SUCCESS:
        return {
          ...state,
          isLoading: false,
          city: payload,
        };
      case GET_CITY_FAILURE:
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