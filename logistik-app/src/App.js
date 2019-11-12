import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import style from './App.scss';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';
import Contact from './containers/Contact/ContactPersons/Contact';
import LegalNotice from './containers/LegalNotice/LegalNotice';
import DataProtection from './containers/DataProtection/DataProtection';
import ContactForm  from './containers/Contact/ContactForm/ContactForm';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/services" component={ Services } />
                        <Route path="/contact" component={ Contact } />
                        <Route path="/contactForm" component={ ContactForm } />
                        <Route path="/legal" component={ LegalNotice } />
                        <Route path="/protection" component={ DataProtection } />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
