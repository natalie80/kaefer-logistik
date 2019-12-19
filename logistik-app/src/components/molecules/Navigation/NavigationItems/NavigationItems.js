import React from 'react';

import  './NavigationItems.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact clicked={props.clicked}> Home </NavigationItem>
        <NavigationItem link="/services" clicked={props.clicked}> Leistungen </NavigationItem>
        <NavigationItem link="/contact" clicked={props.clicked}> Kontakt </NavigationItem>
        <NavigationItem link="/contactForm" clicked={props.clicked}> Kontaktformular </NavigationItem>
        
        { props.isAuth
            ? <NavigationItem link="/dashboard"> Dashboard </NavigationItem>
            : null
        }
    </ul>
);

export default navigationItems;