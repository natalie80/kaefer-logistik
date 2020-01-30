import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import {connect} from "react-redux";

import  './Authentication.scss';
import Input from '../../atoms/Form/Input/Input'
import Button from '../../atoms/Button/Button';
import config from '../../../store/firebaseConfig';



const Authentication = ( props) => {
    console.log('auth props', props );

    const history = props.history;

    const [loginForm, setLoginForm] = useState({
        email: {
            elType: 'input',
            elConfig: {
                type: 'email',
                placeholder: 'E-Mail-Adresse'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false

        },
        password: {
            elType: 'input',
            elConfig: {
                type: 'password',
                placeholder: 'Passwort'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },

            valid: false,
            touched: false

        }
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const checkValidation = (value, rules) => {
        let isValid = true;

        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    };

    const inputChangedHandler = (ev, formId) => {
        console.log("inputChangedHandler value - formId", ev.target.value, formId);

        //touched, wenn user etwas eingegeben hat
        const updatedControls = {
            ...loginForm,
            [formId]: {
                ...loginForm[formId],
                value: ev.target.value,
                valid: checkValidation(ev.target.value, loginForm[formId].validation),
                touched: true
            }
        };
        console.log('updatedControls::',updatedControls);
        setLoginForm(updatedControls);
    };

    const onSubmitFormHandler = useCallback(async event => {
        event.preventDefault();

        let email = event.target[0].value;
        let password = event.target[1].value;
        try {
            await config
                .auth()
                .signInWithEmailAndPassword(email, password);

            setErrorMessage('');
            history.push('/dashboard');
        } catch (error) {
            console.log("ERROR: ", error);

            let errorMsg;
            if (!email.length || !password.length) {
                errorMsg = 'Bitte füllen Sie alle Felder vollständig aus';
            } else {
                errorMsg = 'EMail Adresse oder Passwort ist falsch.';
            }

            setErrorMessage(errorMsg);
        }
    }, [history]);


    const loginFormEl = [];
    for (let key in loginForm) {
        loginFormEl.push({
            id: key,
            config: loginForm[key]
        });
    }

    let form = loginFormEl.map(formEl => (
        <Input
            elType={formEl.config.elType}
            key={formEl.id}
            elConfig={formEl.config.elConfig}
            value={formEl.config.value}
            invalid={!formEl.config.valid}
            shouldValidate={formEl.config.validation}
            touched={formEl.config.touched}
            label={formEl.config.elConfig.placeholder}
            changed={(ev) => inputChangedHandler(ev, formEl.id)}
        />)
    );

    return (
        <div className="Auth">
            <h3>Login </h3>
            <form className="AuthForm" onSubmit={(ev) => onSubmitFormHandler(ev)}>
                {form}
                <Button
                    type="submit"
                    btnType="Primary"

                >Anmelden </Button>
            </form>
           <div className="ErrorMsg"><p>{errorMessage}</p></div>
        </div>
    );
};

/**
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isSignIn: state.auth.isSignIn,
        isAuthenticated: state.auth.tokenId !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};
**/

//export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

export default withRouter(Authentication);
