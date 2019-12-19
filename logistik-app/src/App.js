import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';
import Contact from './containers/Contact/ContactPersons/Contact';
import LegalNotice from './containers/LegalNotice/LegalNotice';
import DataProtection from './containers/DataProtection/DataProtection';
import ContactForm  from './containers/Contact/ContactForm/ContactForm';
import DashboardInfos from "./containers/DashboardInfos/DashboardInfos";
import Login from './components/molecules/Login/Authentication'
import Logout from "./containers/Logout/Log_out";



class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={ Home } />
                            <Route path="/services" render={() => <Services/>}/>
                            <Route path="/contact"  render={() => <Contact/>}/>
                            <Route path="/contactForm" component={ ContactForm } />
                            <Route path="/legal" component={ LegalNotice } />
                            <Route path="/protection" component={ DataProtection } />
                            <Route path="/login" component={ Login } />
                            <Route path="/logout" component={ Logout } />
                        </Switch>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default App;
