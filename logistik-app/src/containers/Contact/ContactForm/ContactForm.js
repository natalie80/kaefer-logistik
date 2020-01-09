import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import  nodemailer   from 'nodemailer';
import axios from 'axios';
import Media from "react-media";

import  './ContactForm.scss';
import Input from '../../../components/atoms/Form/Input/Input'
import {faAngleDoubleRight, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class ContactForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            contactForm: {
                name: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        placeholder: 'Name*'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isString: true,
                        error: 'Invalid name format'
                    },
                    valid: true
                },
                email: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        placeholder: 'E-Mail*'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true,
                        error: 'Invalid email format'
                    },
                    valid: true
                },
                company: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        placeholder: 'Unternehmen'
                    },
                    value: '',
                    validation: {
                        required: false
                    },
                    valid: true
                },
                phone: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        placeholder: 'Telefonnummer'
                    },
                    value: '',
                    validation: {
                        required: false,
                        isNumeric: true
                    },
                    valid: true
                },
                subject: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        placeholder: 'Betreff*'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: true
                },
                message: {
                    elType: 'textarea',
                    elConfig: {
                        type: 'text',
                        placeholder: 'Ihre Nachricht an uns*'
                    },
                    value: '',
                    validation: {
                        required: true,
                        error: 'Invalid message format'
                    },
                    valid: true,
                }
            },
            formIsValid: false,
            isClicked: false
        };
        
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangedHandler = this.onChangedHandler.bind(this);
    }
    
    
    onChangedHandler = (ev, inputIdentifier) => {
        console.log('onChangedHandler  -> inputIdentifier', inputIdentifier);
        
        const updatedForm = {
            ...this.state.contactForm,
            [inputIdentifier]: {
                ...this.state.contactForm[inputIdentifier],
                value: ev.target.value,
                valid: this.checkValidation(ev.target.value, this.state.contactForm[inputIdentifier].validation),
                touched: true
            }
        };
        
        console.log('updatedForm', updatedForm);
        this.setState({contactForm: updatedForm})
        
    };

    checkValidation(value, rules) {
        console.log('checkValidation value/rules', value, rules);
        let isValid = true;
        
        if (!rules) {
            return true;
        }
        
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            console.log(' --Mail-- ');
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = value.search(pattern) == 0 ? true : false;
        }
        if (rules.isNumeric) {
            console.log(' --isNumeric-- ');
            const pattern = /^\d+$/;
            isValid = value.search(pattern) == 0 ? true : false;
        }
        if (rules.isString) {
            console.log(' --isString-- ');
            const pattern = /^[a-zA-Z]+$/;
            isValid = value.search(pattern) == 0 ? true : false;

        }
        console.log('isValid: ',isValid);
        
        return isValid;
    }
    
    async onSubmitHandler(ev) {
        console.log('--onSubmitHandler--');
        ev.preventDefault();
        const formData = {};
        
        for (let formEl in this.state.contactForm) {
            if (this.state.contactForm.hasOwnProperty(formEl)) {
                formData[formEl] = this.state.contactForm[formEl].value;
            }
        }
        const form = await axios.post('/api/send_email', {
            formData
        });
        
        console.log('---formData---', formData);
        
        //this.sendEmail(formData);
        
    };
    
    render() {
        const formElementsArry = [];
        for (let key in this.state.contactForm) {
            if (this.state.contactForm.hasOwnProperty(key)) {
                formElementsArry.push({
                    id: key,
                    config: this.state.contactForm[key]
                });
            }
        }
        let form = (
            <form>
                {
                    formElementsArry.map(formEl => (
                        <Input
                            key={formEl.id}
                            elType={formEl.config.elType}
                            elConfig={formEl.config.elConfig}
                            value={formEl.config.value}
                            invalid={!formEl.config.valid}
                            shouldValidate={formEl.config.validation}
                            errorMessage={formEl.config.validation.error}
                            changed={ (ev) => this.onChangedHandler(ev,formEl.id)}
                        />
                    ))
                }
                <div>
                    <p className="Hint"> * Markierte Pflichtfelder bitte unbedingt ausfüllen </p>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="Button"
                        onClick={this.onSubmitHandler}
                    >Absenden  <FontAwesomeIcon icon={faAngleDoubleRight}/> </Button>
    
                </div>
            </form>
        );

        return (
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                { matches => (
                    <div className={ matches.large ? "ContactForm" : (matches.medium || matches.small) ? "ContactForm_Mobile" : null }>
                       <h2 className="Subheadline">Kontaktformular</h2>
                        <p>Haben Sie eine Frage oder möchten Sie aus einem Grund Kontakt mit uns aufnehmen. Dann hinterlassen Sie uns einfach eine Nachricht. Wir freuen uns auf Sie und werden schnellstmöglich einen Antwort geben.</p>
                        <div className="Form">
                            {form}
                        </div>
                    </div>
                )}
            </Media>
        );
    }
}

export default ContactForm;