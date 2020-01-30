import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';
import Contact from './containers/Contact/Contact';
import LegalNotice from './containers/LegalNotice/LegalNotice';
import DataProtection from './containers/DataProtection/DataProtection';
import CompanyAddress from './components/molecules/CompanyAddress/CompanyAddress';


import Dashboard from './components/molecules/Dashboard/Dashboard';
import Login from './Login1/Login';
import { AuthProvider } from "./Login1/Auth";
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
                                    <Route path="/login" component={Login} />
                                </AuthProvider>
                            </Switch>
                    </Layout>
                </div>
            </div>
        );
};

export default App;
