import axios from "../axios-instance";


export const  login = (token) => {
    let url = '';
    return dispatch => {
        
        //let url = '/login.json';
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmhzVv7rmmeaHvUQTugalEmi1W4OSXjzQ';
        
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmhzVv7rmmeaHvUQTugalEmi1W4OSXjzQ';
        }
        
        axios.get('/login.json?auth=' + token)
            .then(response => {
                console.log('--- response---', response);
               
                
                // if(response.data.email === authData.email && response.data.password === authData.password) {
                //   console.log('--- LOGIN TRUE ----');
                //}
            })
            .catch(error => {
                console.log('---error--', error);
                
            });
    }
};
