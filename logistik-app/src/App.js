import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/Contact/Contact';
import LegalNotice from './components/pages/LegalNotice/LegalNotice';
import DataProtection from './components/pages/DataProtection/DataProtection';
import CompanyAddress from './components/molecules/CompanyAddress/CompanyAddress';


import Dashboard from './components/molecules/Dashboard/Dashboard';

import { AuthProvider } from "./store/Auth";
import PrivateRoute from './store/PrivateRouter';



const App = () => {
    return (
        <div className="App">
            <div>
                <Layout>
                        <Switch>
                            <AuthProvider>
                                <Route path="/" exact component={ Home } />
                                <Route path="/services" component={ Services } />
                                <Route path="/contact"  component={ Contact } />
                                <Route path="/OpenStreetMap"  component={ CompanyAddress } />
                                <Route path="/legal" component={ LegalNotice } />
                                <Route path="/protection" component={ DataProtection } />

                                <PrivateRoute path="/dashboard" component={Dashboard} />

                            </AuthProvider>
                        </Switch>
                </Layout>
            </div>
        </div>
    );
};

export default App;
