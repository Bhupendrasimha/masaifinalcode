import {
    STATION_FAILURE,
    STATION_REQUEST,
    STATION_SUCCESS,
  } from "./actionTypes";

  import {
    GET_DISTRICT_REQUEST,
    GET_DISTRICT_SUCCESS,
    GET_DISTRICT_FAILURE,
  } from "./actionTypes";
  
  const initState = {
    isLoading: false,
    error: false,
    success: false,
    message: "",
    data: {},
    user: {}
  };
  
  export const stationReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case STATION_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case STATION_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: true,
          message: payload,
        };
      case STATION_SUCCESS:
        return {
          ...state,
          isLoading: false,
          success: true,
          data: payload
        };
        case GET_DISTRICT_REQUEST:
          return {
            ...state,
            isLoading: true,
          };
        case GET_DISTRICT_SUCCESS:
          return {
            ...state,
            isLoading: false,
            user: payload,
          };
        case GET_DISTRICT_FAILURE:
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