import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Media from "react-media";

import styles from './Footer.scss';
import Modal from "../Modal/Modal";
import Authentication from '../Login/Authentication'
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

class Footer extends Component {
    
    state = {
        displayText: "Anmelden",
        modalContent:  <Authentication/>
    };
    
    
    render() {
        return (
            <div className={styles.Footer}>
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 1199px)",
                    large: "(min-width: 1200px)"
                }}>
                    { matches => (
                        <section className={(matches.large || matches.medium) ? styles.Contact_Daten : styles.Contact_Daten_Mobile}>
                            <div className={
                                 matches.large ? styles.Info_Section
                                 : matches.medium ? styles.Info_Section_Tablet
                                 : styles.Info_Section_Mobile }
                            >
                                <h4>Adresse</h4>
                                <p> Käfer Logistik GmbH </p>
                                <p>StellerStr 30A</p>
                                <p>27755 Delmenhorst</p>
                            </div>
                            
                            <div className={
                                matches.large ? styles.Info_Section
                                : matches.medium ? styles.Info_Section_Tablet
                                : styles.Info_Section_Mobile}
                            >
                                <h4>Kontakt</h4>
                                <p>Telefon: +49 (4221) 288 40 50</p>
                                <p>Telefax: +49 (4221) 288 40 59</p>
                                <p>Email: info@kaefer-logistik.com</p>
                            </div>
                            
                            <div className={
                                matches.large ? styles.Info_Section
                                : matches.medium ? styles.Info_Section_Tablet
                                : styles.Info_Section_Mobile}
                            >
                                
                                <h4>Das Unternehmen</h4>
                                <p><Link to='/protection'> Datenschutz </Link></p>
                                <p><Link to="/legal">Impressum</Link></p>
                                <p><Link to="/agb">AGB</Link></p>
            
                                { !this.props.isAuthenticated
                                    ? <Modal modalText={this.state.displayText} modalContent={this.state.modalContent}/>
                                    : <p><Link to="/logout">Logout</Link></p>
                                }
                            </div>
                        </section>
                     )}
                </Media>
                <hr/>
                <div><p className={styles.Copyright}>© 2017 Käfer Logistik GmbH</p></div>
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
