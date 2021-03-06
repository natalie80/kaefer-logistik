import React, { Component } from 'react';
import axios from '../../../store/axios-instance';

import './Contact.scss';
import Staff from '../../molecules/Staff/Staff';
import ContactForm  from '../../organisms/ContactForm/ContactForm';

class Contact extends Component {
    state = {
        persons: []
    };
    
    componentDidMount() {
        document.title = "24 Stunden Serviceauskunft | Kaefer Logistik";

        axios.get('/persons.json')
            .then(res => {
                const personsObj = [];
                for(let key in res.data) {
                    if (res.data.hasOwnProperty(key)) {
                        personsObj.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                }
                this.setState({persons: personsObj});
            })
            .catch(err => {
                console.log('ERROR', err);
                this.setState({});
            });
    }
    
    render() {
        return (
            <div className="Contact">
                <h1 className="Headline">Kontakt</h1>
                <h2 className="Subheadline">Kontakt zur Person</h2>
                {
                    this.state.persons.map(person => (
                        <React.Fragment key={person.id}>
                            <Staff
                                key={person.id}
                                person_email={person.email}
                                person_firstname={person.firstname}
                                person_mobil={person.mobil}
                                person_surname={person.surname}
                                person_telefon={person.telefon}
                            />
                        </React.Fragment>
                    ))
                }

                <ContactForm/>
            </div>
        );
    }
}

export default Contact;