import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';

import config from '../store/firebaseConfig';
import { AuthContext } from "./Auth";

const Login = ({ history }) => {

    const handleLoin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await config
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push('/dashboard');
        } catch (error) {
            console.log("ERROR LOGIN: ", error);
        }
    },[history] );

    const { currentUser } = useContext(AuthContext);

    if(currentUser) {
        return <Redirect to={"/"} />;
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLoin} action="">
                <div>
                    <label htmlFor="email">
                        Email
                        <input name="email" type="email" placeholder="Email" />
                    </label>
                </div>
                <br/>
                <div>
                    <label htmlFor="password">
                        Password
                        <input name="password" type="password" placeholder="Password" />
                    </label>
                </div>
                <br/>
                <button type="submit">Login</button>

            </form>
        </div>
    )
};

export default withRouter(Login);