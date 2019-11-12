import React from 'react';

import styles from './NavigationItems.scss';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact> Home </NavigationItem>
        <NavigationItem link="/services"> Leistungen </NavigationItem>
        <NavigationItem link="/contact"> Kontakt </NavigationItem>
        <NavigationItem link="/contactForm"> Kontaktformular </NavigationItem>
        <NavigationItem link="/legal"> Impressum </NavigationItem>
        <NavigationItem link="/protection"> Datenschutz </NavigationItem>
    </ul>
);

export default navigationItems;