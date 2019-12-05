import React from 'react';

import styles from './NavigationItems.scss';
import NavigationItem from '../NavigationItem/NavigationItem';
//clicked

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact clicked={props.clicked}> Home </NavigationItem>
        <NavigationItem link="/services" clicked={props.clicked}> Leistungen </NavigationItem>
        <NavigationItem link="/contact" clicked={props.clicked}> Kontakt </NavigationItem>
        <NavigationItem link="/contactForm" clicked={props.clicked}> Kontaktformular </NavigationItem>
        <NavigationItem link="/dashboard" clicked={props.clicked}> Dashboard </NavigationItem>
        
        { props.isAuth
            ? <NavigationItem link="/dashboard"> Dashboard </NavigationItem>
            : null
        }
    </ul>
);

export default navigationItems;