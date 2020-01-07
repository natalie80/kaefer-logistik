import React, { Component } from 'react';
import axios from '../../store/axios-instance';

import './Contact.scss';
import Staff from '../../components/molecules/Staff/Staff';
import ContactForm  from './ContactForm/ContactForm';
import Hoc from '../../hoc/hoc';

class Contact extends Component {
    state = {
        persons: []
    };
    
    componentDidMount() {
        axios.get('/persons.json')
            .then(res => {
                console.log('Here is persons: ', res.data);
                const personsObj = [];
                for(let key in res.data) {
                    personsObj.push({
                        ...res.data[key],
                        id: key
                    });
                }
                console.log('Here is personsObj:: ', personsObj);
                this.setState({persons: personsObj});
            })
            .catch(err => {
                console.log('ERROR');
                this.setState({});
            });
    }
    
    render() {
        return (
            <div>
                <h3 className="Subheadline">Kontakt zur Person</h3>
                {
                    this.state.persons.map(person => (
                        <Hoc>
                            <Staff
                                key={person.id}
                                person_email={person.email}
                                person_firstname={person.firstname}
                                person_mobil={person.mobil}
                                person_surname={person.surname}
                                person_telefon={person.telefon}
                            />
                        </Hoc>
                    ))
                }

                <ContactForm/>
            </div>
        );
    }
}

export default Contact;