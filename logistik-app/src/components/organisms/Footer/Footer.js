import React, { Component } from 'react';

import styles from './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className={styles.Footer}>
                <section className={styles.Contact_Daten}>
                    <div className={styles.Address}>
                        <h4>Adresse</h4>
                        <p> Käfer Logistik GmbH </p>
                        <p>StellerStr 30A</p>
                        <p>27755 Delmenhorst</p>
                    </div>
                    <div className={styles.Contact}>
                        <h4>Kontakt</h4>
                        <p>Telefon: +49 (4221) 288 40 50</p>
                        <p>Telefax: +49 (4221) 288 40 59</p>
                        <p>Email: info@kaefer-logistik.com</p>
                    </div>
                </section>
            </div>
        );
    }
}


export default Footer;