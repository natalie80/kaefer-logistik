import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import  Nodemailer   from 'nodemailer';
import axios from 'axios';

import styles from './ContactForm.scss';
import Input from '../../../components/atoms/Form/Input/Input'
import config from '../../../config/config';

class ContactForm extends Component {
    state = {
        contactForm: {
            name: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'name'
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
                    placeholder: 'Email'
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
                    placeholder: 'company'
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
                    placeholder: 'phone number'
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
                    placeholder: 'subject'
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
                    placeholder: 'Message'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
            }
        },
        formIsValid: false
    };
    
    onChangedHandler = (ev, inputIdentifier) => {
        console.log('onChangedHandler  -> inputIdentifier', inputIdentifier);
        
        const updatedForm = {
            ...this.state.contactForm
        };
        updatedForm[inputIdentifier].value = ev.target.value;
        
        console.log('updatedForm', updatedForm);
        this.setState({contactForm: updatedForm})
        
    };
    
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
        
        Nodemailer.createTestAccount( (err, account) => {
            let transporter = Nodemailer.createTransport(mailConfig);
        
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
                console.log('Preview URL', Nodemailer.getTestMessageUrl(info));
               
            });
        });
    };
    
    onSubmitHandler = async(ev) => {
        console.log('--onSubmitHandler--');
        const formData = {};
        for (let formEl in this.state.contactForm) {
            if (this.state.contactForm.hasOwnProperty(formEl)) {
                formData[formEl] = this.state.contactForm[formEl].value;
            }
        }
        console.log('---formData---', formData);
         ev.preventDefault();
        this.sendEmail(formData);
        
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
                <Button
                    className={styles.Button}
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={this.onSubmitHandler}
                >Absenden</Button>
            </form>
        );
        
        return (
            <div className={styles.ContactForm}>
               <h3>Kontaktformular</h3>
                {form}
            </div>
        );
    }
}

export default ContactForm;