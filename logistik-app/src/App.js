import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';
import Contact from './containers/Contact/Contact';
import LegalNotice from './containers/LegalNotice/LegalNotice';
import DataProtection from './containers/DataProtection/DataProtection';
import CompanyAddress from './components/molecules/CompanyAddress/CompanyAddress';
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
                            <Route path="/services" component={ Services } />
                            <Route path="/contact"  component={ Contact } />
                            <Route path="/OpenStreetMap"  component={ CompanyAddress } />
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
