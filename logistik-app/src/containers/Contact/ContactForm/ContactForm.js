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
                        required: true
                    },
                    valid: false
                },
                email: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        placeholder: 'E-Mail*'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
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
                    valid: false
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
                        minLength: 6,
                        maxLength: 9
                    },
                    valid: false
                },
                subject: {
                    elType: 'input',
                    elConfig: {
                        type: 'text',
                        placeholder: 'Betreff'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                message: {
                    elType: 'textarea',
                    elConfig: {
                        type: 'text',
                        placeholder: 'Ihre Nachricht an uns*'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
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

    sendEmail = (formData) => {
        console.log('sendEmail', formData);
        
        const mailConfig = {
            host: 'ssh.natalie-kaefer.de',
            port: 22,
            secure: false,
            auth: {
                user: 'natalie-kaefer.de',
                pass: 'nkl!0407'
            }
        };
        let mailOptions = {
            from: 'Adem',
            to: 'info@natalie-kaefer.de',
            sender: 'adem@web.de',
            subject: 'Adem React  Email',
            text: 'Hallo hier ist meine erste EMail!!',
            html: '<h4> HTML version Halli Halllo </h4>',
            attachments: ''
        };
        
        nodemailer.createTestAccount( ( ) => {
            let transporter = nodemailer.createTransport(mailConfig);
        
            // verify connection configuration
            transporter.verify(function(error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Server is ready to take our messages");
                }
            });
        
            transporter.sendMail(mailOptions, ( err, info) => {
                if(err) {
                    return console.log(err);
                } else {
                    console.log('Message sent', info.messageId);
                }
                transporter.close();
                console.log('Preview URL', nodemailer.getTestMessageUrl(info));
               
            });
        });
    };
    
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
                    >Absenden  <FontAwesomeIcon icon={faAngleDoubleRight} color="weith" /> </Button>
    
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
                        <p>Haben Sie eine Frage oder möchten Sie aus einem anderem Grund Kontakt mit uns aufnehmen? Dann hinterlassen Sie uns eine Nachricht und wir werden Sie schnellstmöglich antworten.</p>
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