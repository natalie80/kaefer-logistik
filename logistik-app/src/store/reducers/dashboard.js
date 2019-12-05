import  * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    dashboardInfos: [],
    loading: false,
    error: false,
    purchased: false
};

const dashboardInfosInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};

const dashboardInfosStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const dashboardInfosSuccess = ( state, action ) => {
    return updateObject( state, {
        dashboardInfos: action.dashboardInfos,
        loading: false
    } );
};

const dashboardInfosFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DASHBOARD_INFOS_INIT:
            return dashboardInfosInit(state,action);
        case actionTypes.DASHBOARD_INFOS_START:
            return dashboardInfosStart(state,action);
        case actionTypes.DASHBOARD_INFOS_SUCCESS:
            return dashboardInfosSuccess(state,action);
        case actionTypes.DASHBOARD_INFOS_FAIL:
            return dashboardInfosFail(state, action);
        default:
            return state;
    }
};

export default dashboardReducer;