import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState =  {
    tokenId: null,
    userId: null,
    error: null,
    loading: null,
    isSignIn: false,
    authRedirectPath: '/'
};

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        tokenId: action.tokenId,
        userId: action.userId,
        error: null,
        loading: false,
        isSignIn: true
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        isSignIn: false
    });
};

const authLogout = (state) => {
  return updateObject(state,{
      tokenId: null,
      userId: null
  });
};

const setAuthRedirectPathReducer = (state = initialState, action) => {
    return updateObject(state,{
        authRedirectPath: action.path
    });
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPathReducer(state, action);
        default:
                return state
    }
};

export default authReducer;