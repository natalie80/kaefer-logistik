import React from 'react';
import { NavLink } from 'react-router-dom';

import  './NavigationItem.scss';

const NavigationItem = (props) => (

        <li className="NavigationItem" onClick={props.clicked}>
            <NavLink
                to={props.link}
                activeClassName="active"
                exact={props.exact}>
                {props.children}
            </NavLink>
        </li>
);

export default NavigationItem;