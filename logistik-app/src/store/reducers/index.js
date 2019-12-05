/**
 * In this file will be all reduce importen
 *
 **/

import authReducer from "./auth";

import dashboardReducer from "./dashboard";

import {combineReducers} from "redux";

//added to global root reducer
const allReducers = combineReducers({
        auth: authReducer,
        dashboard: dashboardReducer
    }
);

export default allReducers;