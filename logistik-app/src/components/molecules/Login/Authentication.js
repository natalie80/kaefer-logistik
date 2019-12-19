import React, { Component } from "react";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

import  './Authentication.scss';
import Input from '../../atoms/Form/Input/Input'
import Button from '../../atoms/Button/Button';
import Spinner from '../../atoms/Spinner/Spinner'
import * as actions from '../../../store/actions'



class Authentication extends Component {
        
        state = {
            loginForm: {
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
                    elType: 'password',
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
            },
            isSignup: true
        };
    
    
    checkValidation(value, rules) {
        let isValid = true;
    
        if (!rules) {
            return true;
        }
    
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength &&  isValid
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
    }
    
    inputChangedHandler = (ev, formId) => {
        console.log("inputChangedHandler value - formId", ev.target.value, formId);
        
        //touched, wenn user etwas eingegeben hat
        const updatedControls = {
            ...this.state.loginForm,
            [formId]: {
                ...this.state.loginForm[formId],
                value: ev.target.value,
                valid: this.checkValidation(ev.target.value, this.state.loginForm[formId].validation),
                touched: true
            }
        };
    
        this.setState({loginForm: updatedControls});
    };
    
    onSubmitFormHandler = (ev, props) => {
        ev.preventDefault();
        console.log('PROPS :: ',  props);
        props.onAuth(this.state.loginForm.email.value, this.state.loginForm.password.value, this.state.isSignup);
        
   
    };
    
    onClickedHandler() {
        console.log('onClickedHandler');
       // this.setState(prevState => {
        //    return {isSignup: !prevState.isSignup};
      //  });
    }
    
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        })
    };
   
    
    render() {
        const loginFormEl = [];
        let errorMessage = null;
        
        for (let key in this.state.loginForm) {
            loginFormEl.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
        
        
        let form = loginFormEl.map( formEl => (
                <Input
                    elType={formEl.config.elType}
                    key={formEl.id}
                    elConfig={formEl.elConfig}
                    value={formEl.config.value}
                    invalid={!formEl.config.valid}
                    shouldValidate={formEl.config.validation}
                    touched={formEl.config.touched}
                    label={formEl.config.elConfig.placeholder}
                    changed={(ev) => this.inputChangedHandler(ev, formEl.id)}
                />
            )
        );
        
        if(this.props.loading) {
            form = <Spinner/>
        }
        
       if(this.props.error){
           errorMessage = (
               <p>{this.props.error.message}</p>
           )
       }
       
       let authRedirect = null;
       if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/"/>
       }
      
        return (
            <div className="Auth">
                {authRedirect}
                <h3>Login </h3>
                {errorMessage}
                <form  onSubmit={(ev) => this.onSubmitFormHandler(ev, this.props)}>
                    {form}
                    <Button
                        clicked={this.onClickedHandler}
                        btnType="Primary"
                    >Anmelden </Button>
                </form>
                
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">
                    SWITCH TO {this.state.isSignup ? 'SIGN_IN' : 'SIGN_OUT'}
                </Button>
            </div>
        );
    }
}

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
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
