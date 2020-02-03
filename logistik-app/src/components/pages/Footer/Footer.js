import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Media from "react-media";
import Mailto from 'react-protected-mailto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';
import Modal from "../../molecules/Modal/Modal";
import Authentication from '../../molecules/Login/Authentication'
import configfb from "../../../store/firebaseConfig";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [displayText, setDisplayText] = useState('Anmelden');

    useEffect(() => {
        configfb.auth().onAuthStateChanged(authUser => {
            console.log('onAuthStateChanged authUser:', authUser);

            if (authUser != null ) {
                setIsVisible(false);
                setDisplayText('Logout');
            } else {
                setIsVisible(true);
                setDisplayText('Anmelden');
            }
        });

     }, []);

    const logOut = () => {
        console.log('== logOut ==:');
        configfb.auth().signOut();
    };

    let angleDoubleRight = true,
        modalContent = <Authentication />;

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
                                <p className="Footer-Link-Info">
                                        <Link to='/protection'>
                                            <FontAwesomeIcon icon={faAngleDoubleRight} color="weith" />
                                            <span className="FooterLink">Datenschutz</span>
                                        </Link>
                                </p>
                                <p className="Footer-Link-Info">
                                    <Link to="/legal">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} color="weith"/>
                                        <span className="FooterLink">Impressum</span>
                                    </Link>
                                </p>

                                {
                                    isVisible
                                        ? <Modal buttonText={displayText} awesomeIcon={angleDoubleRight} modalContent={modalContent} />

                                        : <Link to="/" onClick={logOut}>
                                            <FontAwesomeIcon icon={faAngleDoubleRight} color="weith"/>
                                            <span className="FooterLink">{displayText}</span>
                                          </Link>
                                }
                            </div>
                            <div className="Telephone-Number">
                                <p> 24 Stunden Serviceauskunft <span className="Footer-Hotline"> <Mailto  tel='+49 )4221( 288 40 50'/></span> </p>
                            </div>
                        </section>
                     )}
                </Media>
                <hr className="SeparateLine"/>
                <div><p className="Copyright">© 2017 Käfer Logistik GmbH</p></div>
            </div>
        );
};


export default Footer;
