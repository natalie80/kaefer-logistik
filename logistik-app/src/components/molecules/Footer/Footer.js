import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Media from "react-media";
import Mailto from 'react-protected-mailto';

import  './Footer.scss';
import Modal from "../Modal/Modal";
import Authentication from '../Login/Authentication'
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    
    state = {
        displayText: "Anmelden",
        angleDoubleRight: true,
        modalContent:  <Authentication/>
    };
    
    
    render() {
        return (
            <div className="Footer">
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 1199px)",
                    large: "(min-width: 1200px)"
                }}>
                    { matches => (
                        <section className={(matches.large || matches.medium) ? 'Contact_Daten' : 'Contact_Daten_Mobile' }>
                            <div className={
                                 matches.large ? 'Info_Section'
                                 : matches.medium ? 'Info_Section_Tablet'
                                 : 'Info_Section_Mobile' }
                            >
                                <h4>Adresse</h4>
                                <p className="Footer-Link-Info"> Käfer Logistik GmbH </p>
                                <p className="Footer-Link-Info">StellerStr 30A</p>
                                <p className="Footer-Link-Info">27755 Delmenhorst</p>
                            </div>
                            
                            <div className={
                                matches.large ? 'Info_Section'
                                : matches.medium ? 'Info_Section_Tablet'
                                : 'Info_Section_Mobile' }
                            >
                                <h4>Kontakt</h4>
                                <p className="Footer-Link-Info">Telefon:  <Mailto  tel='+49 )4221( 288 40 50'/> </p>
                                <p className="Footer-Link-Info">Telefax: +49 (4221) 288 40 59</p>
                                <p className="Footer-Link-Info">Email: <Mailto  email='info@kaefer-logistik.com'/> </p>
                            </div>
                            
                            <div className={
                                matches.large ?  'Info_Section'
                                : matches.medium ?  'Info_Section_Tablet'
                                : 'Info_Section_Mobile' }
                            >
                                
                                <h4>Das Unternehmen</h4>
                                <p className="Footer-Link-Info"><Link to='/protection'> <FontAwesomeIcon icon={faAngleDoubleRight} color="weith" /><span className="FooterLink">Datenschutz</span></Link></p>
                                <p className="Footer-Link-Info"><Link to="/legal"> <FontAwesomeIcon icon={faAngleDoubleRight} color="weith"/><span className="FooterLink">Impressum</span></Link></p>
            
                                { !this.props.isAuthenticated
                                    ? <Modal buttonText={this.state.displayText} awesomeIcon={this.state.angleDoubleRight} modalContent={this.state.modalContent}/>
                                    : <p className="Footer-Link-Info"><Link to="/logout">Logout</Link></p>
                                }
                            </div>
                        </section>
                     )}
                </Media>
                <hr className="SeparateLine"/>
                <div><p className="Copyright">© 2017 Käfer Logistik GmbH</p></div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.tokenId != null
    };
};



const mapDispatchToProps = dispatch => {
    return { };
};


export default connect(mapStateToProps, mapDispatchToProps)(Footer);
