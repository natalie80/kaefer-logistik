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
                salutation_1: {
                    elType: 'input',
                    elConfig: {
                        type: 'radio',
                        name: 'Frau'
                    },
                    value: '',
                    validation: {
                        required: false
                    },
                    valid: '',
                    label: 'Frau'
                },
                salutation_2: {
                    elType: 'input',
                    elConfig: {
                        type: 'radio',
                        name: 'Herr'
                    },
                    value: '',
                    validation: {
                        required: false
                    },
                    valid: '',
                    label: 'Herr'
                },
                name: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        name: 'customerName',
                        placeholder: 'Name*'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isString: true,
                        error: 'Bitte überprüfen Sie Ihren Namen.'
                    },
                    valid: ''
                },
                email: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        name: 'customerEMail',
                        placeholder: 'E-Mail*'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true,
                        error: 'Bitte überprüfen Sie Ihre E-Mail-Adresse.'
                    },
                    valid: ''
                },
                company: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        name: 'customerCompany',
                        placeholder: 'Unternehmen'
                    },
                    value: '',
                    validation: {
                        required: false
                    },
                    valid: ''
                },
                phone: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        name: 'customerPhone',
                        placeholder: 'Telefonnummer'
                    },
                    value: '',
                    validation: {
                        required: false,
                        isNumeric: true
                    },
                    valid: ''
                },
                subject: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        name: 'customerSubject',
                        placeholder: 'Betreff*'
                    },
                    value: '',
                    validation: {
                        required: true,
                        error: 'Bitte geben Sie den Betreff ein.'
                    },
                    valid: ''
                },
                message: {
                    elType: 'textarea',
                    elConfig: {
                        type: 'text',
                        name: 'customerMessage',
                        placeholder: 'Ihre Nachricht an uns*'
                    },
                    value: '',
                    validation: {
                        required: true,
                        error: 'Bitte geben Sie Ihren Nachricht ein.'
                    },
                    valid: '',
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
        let isValid = false;
        
        if (!rules) {
            console.log('--ruels--');
            return true;
        }

        if(rules.required) {
            isValid = value.trim() !== '' ? true : false;

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
                const pattern = /^[a-zA-Z\s]+$/;
                isValid = value.search(pattern) == 0 ? true : false;

            }
        } else {
            isValid = '';
        }
        console.log('---isValid--- ',isValid);
        
        return isValid;
    }
    
    async onSubmitHandler(ev) {
        console.log('--onSubmitHandler--');
        ev.preventDefault();

        let formIsValid = false;
        let formInValid = false;
        const formData = {};
        let formInput;
        
        for (let formEl in this.state.contactForm) {
            if (this.state.contactForm.hasOwnProperty(formEl)) {
                console.log('Name: ', this.state.contactForm[formEl].elConfig.name);

                formInput = this.state.contactForm[formEl];
                formData[formEl] = formInput.value;

                if(formInput.validation.required) {

                    if (formInput.valid) {
                        console.log('--- Input Feld is Valid--- OK');
                        formIsValid = true;
                    } else {
                        formInValid = true;
                        this.formInputError(formInput);
                        console.log('--- Input Feld is InValid--- ERROR SHOW');
                    }
                } else {
                    formIsValid = true;
                    console.log('--- NOT  Required --- OK');
                }
            }
        }
        console.log('--- formInValid ---', formInValid);

        if(!formInValid) {
            console.log('--- FORM SEND ---');
        } else {
            console.log('--- FORM NOT SEND  show error---');
        }

        const form = await axios.post('/api/send_email', {
            formData
        });
        
        console.log('---formData---', formData);
        
        //this.sendEmail(formData);
        
    };

    formInputError(inputEl){
        let inputElement = document.getElementsByClassName('InputEl');
        for(let item of inputElement) {
            if(item.getAttribute('name') === inputEl.elConfig.name){
                item.setAttribute('class','InputEl Invalid')
            }
        }
    }

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
                            invalid={formEl.config.valid}
                            shouldValidate={formEl.config.validation}
                            changed={ (ev) => this.onChangedHandler(ev,formEl.id)}
                            label={formEl.config.label}
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