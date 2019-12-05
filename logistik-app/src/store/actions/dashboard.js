import axios from "../axios-instance";
import * as actionTypes from "./actionTypes";

export const dashboardInfosInit = () => {
    return {
        type: actionTypes.DASHBOARD_INFOS_INIT
    };
};

export const dashboardInfosStart = () => {
    return {
        type: actionTypes.DASHBOARD_INFOS_START
    };
};

export const dashboardInfosSuccess = ( dashboardInfos ) => {
    return {
        type: actionTypes.DASHBOARD_INFOS_SUCCESS,
        dashboardInfos: dashboardInfos
    };
};

export const dashboardInfosFail = (error) => {
    return {
        type: actionTypes.DASHBOARD_INFOS_FAIL,
        error: error
    }
};

export const  fetchDashboardInfos = (token) => {
    return dispatch => {
        dispatch(dashboardInfosStart());
        
       //https://kaefer-logistik.firebaseio.com/dashboard
        //  axios.get('/dashboard.json?auth=' + token )
        axios.get('/dashboard.json'  )
            .then(response => {
                console.log('---DASHBOARD response---', response.data, token);
              
              /**  const fetchedData = [];
                for (let key in response.data) {
                    fetchedData.push({
                        ...response.data[key],
                        id: key
                    })
                }**/
              
                dispatch(dashboardInfosSuccess(response.data));
            })
            .catch(error => {
                console.log('---error--', error);
                dispatch(dashboardInfosFail(error));
                
            });
    }
};