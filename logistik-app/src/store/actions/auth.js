import * as actionTypes from './actionTypes';
import axios from '../axios-instance';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

//localId = userId, es ist derselbe
export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId: token,
        userId: user
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
     return {
         type: actionTypes.AUTH_LOGOUT
     }
};

export const checkAuthTimeout =  (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
};

export const  auth = (email, password) => {
    let url = '';
    return dispatch => {
        dispatch(authStart());
        
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
    
        //let url = '/login.json';
         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmhzVv7rmmeaHvUQTugalEmi1W4OSXjzQ';
         

           // url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmhzVv7rmmeaHvUQTugalEmi1W4OSXjzQ';

        
         axios.post(url, authData)
            .then(response => {
                console.log('response: ', response);
                console.log('authData: ', authData);
                dispatch(authSuccess(response.data.idToken, response.data.localId ));
                dispatch(checkAuthTimeout(response.data.expiresIn));
                
            })
            .catch(error => {
                console.log('error', error);
                dispatch(authFail(error.response ));
            });
    }
};
