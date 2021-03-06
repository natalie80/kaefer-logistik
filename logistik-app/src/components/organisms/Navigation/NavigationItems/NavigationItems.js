import React from 'react';

import  './NavigationItems.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact clicked={props.clicked}> Home </NavigationItem>
        <NavigationItem link="/services" clicked={props.clicked}> Leistungen </NavigationItem>
        <NavigationItem link="/contact" clicked={props.clicked}> Kontakt </NavigationItem>
        <NavigationItem link="/OpenStreetMap" clicked={props.clicked}> So finden Sie uns </NavigationItem>
        
        { props.isAuth
            ? <NavigationItem link="/dashboard" clicked={props.clicked}> Dashboard </NavigationItem>
            : null
        }
    </ul>
);

export default NavigationItems;