import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import  './Authentication.scss';
import Input from '../../atoms/Form/Input/Input'
import Button from '../../atoms/Button/Button';
import config from '../../../store/firebaseConfig';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Authentication = ( props) => {

    const history = props.history;
    const classes = useStyles();

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
        let isValid = false;

        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !=='' ? true : false;

            if (rules.minLength) {
                isValid = value.length >= rules.minLength && isValid
            }
            if (rules.isEmail) {
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                isValid = value.search(pattern) === 0 ? true : false;
            }

        } else {
            isValid = false;
        }

        return isValid;
    };

    const inputChangedHandler = (ev, formId) => {

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
            key={formEl.id}
            elKey={formEl.id}
            elType={formEl.config.elType}
            elConfig={formEl.config.elConfig}
            value={formEl.config.value}
            invalid={formEl.config.valid}
            shouldValidate={formEl.config.validation}
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

            { errorMessage != null ?
                <div className={classes.root + ' ErrorMsg'}>
                    <Alert severity="error" color='error' variant='standard'>{errorMessage}</Alert>
                </div>
                : null
            }
        </div>
    );
};


export default withRouter(Authentication);
