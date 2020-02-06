import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import axios from 'axios';
import Media from "react-media";

import  './ContactForm.scss';
import Input from '../../atoms/Form/Input/Input'
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class ContactForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            contactForm: {
                  /**  salutation_1: {
                        elType: 'radio',
                        elConfig: {
                            type: 'radio',
                            name: 'Frau'
                        },
                        value: 'Frau',
                        validation: {
                            required: false
                        },
                        valid: '',
                        label: 'Frau'
                    },
                    salutation_2: {
                        elType: 'radio',
                        elConfig: {
                            type: 'radio',
                            name: 'Herr'
                        },
                        value: 'Herr',
                        validation: {
                            required: false
                        },
                        valid: '',
                        label: 'Herr'
                    },**/
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
            gender: 'Herr'

        };
        
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangedHandler = this.onChangedHandler.bind(this);
    }
    
    
    onChangedHandler = (ev, inputIdentifier) => {
        const updatedForm = {
           ...this.state.contactForm,
           [inputIdentifier]: {
               ...this.state.contactForm[inputIdentifier],
               value: ev.target.value,
               valid: this.checkValidation(ev.target.value, this.state.contactForm[inputIdentifier].validation),
               touched: true
           }
        };
        this.setState({contactForm: updatedForm})
    };

    onChangedHandlerRadio = (ev) => {
        console.log('radio ev', ev.target.value);
        this.setState({ gender: ev.target.value });
    };

    checkValidation(value, rules) {
        let isValid = false;
        
        if (!rules) {
            return true;
        }

        if(rules.required) {
            isValid = value.trim() !== '' ? true : false;

            if (rules.isEmail) {
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                isValid = value.search(pattern) === 0 ? true : false;
            }
            if (rules.isNumeric) {
                const pattern = /^\d+$/;
                isValid = value.search(pattern) === 0 ? true : false;
            }
            if (rules.isString) {
                const pattern = /^[a-zA-Z\s]+$/;
                isValid = value.search(pattern) === 0 ? true : false;

            }
        } else {
            isValid = '';
        }
        
        return isValid;
    }
    
    async onSubmitHandler(ev) {

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
                        formIsValid = true;
                    } else {
                        formInValid = true;
                        this.formInputError(formInput);
                    }
                } else {
                    formIsValid = true;
                }
            }
        }

        if(!formInValid) {
            console.log('--- FORM SEND ---');
        } else {
            console.log('--- FORM NOT SEND  show error---');
        }

        formData['gender'] = this.state.gender;
        console.log('------ formData ------', formData);

        const response = await fetch('/send_email', {
            method: 'POST',
            data:  formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ post: formData }),
        }).then((response) => {
            if (response.data.status === 'success') {
                console.log("=== Message Sent. ===");
                // this.resetForm()
            } else if (response.data.status === 'fail') {
                console.log("=== Message failed to send. ===");
            }
        });

    /**  await  axios({
          method: "POST",
          url:"/send",
          data:  formData,
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          },
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("=== Message Sent. ===");
              // this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("=== Message failed to send. ===")
            }
        }) **/
        
    };

    resetForm(){
        document.getElementById('contact-form').reset();
    };

    formInputError(inputEl){
        let inputElement = document.getElementsByClassName('InputEl');
        for(let item of inputElement) {
            if(item.getAttribute('name') === inputEl.elConfig.name){
                item.setAttribute('class','InputEl Invalid')
            }
        }
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

                <div className="CustomerSalutation">
                    <label className="Label" htmlFor="">Frau</label>
                    <input type='radio' id='salutation_1'  name='Gender' value='Frau'
                           checked={this.state.gender === 'Frau'} onChange = {(ev) => this.onChangedHandlerRadio(ev)} />

                    <label className="Label" htmlFor="">Herr</label>
                    <input type='radio' id='salutation_2'  name='Gender' value='Herr'
                           checked={this.state.gender === 'Herr'} onChange = {(ev) => this.onChangedHandlerRadio(ev)} />
                </div>

                {
                    formElementsArry.map(formEl => (
                        <Input
                            key={formEl.id}
                            elKey={formEl.id}
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