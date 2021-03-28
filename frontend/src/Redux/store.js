import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { citiesReducer } from "./Cities/reducer";
import { cityReducer } from "./City/reducer";
import { loginReducer } from "./Login/reducer";

import {registerReducer} from "./Register/reducer";
import { stationReducer } from "./Station/reducer";

const reducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    cities: citiesReducer,
    city: cityReducer,
    station: stationReducer
  });
  
  export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
