import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.scss';

const navigationItem = (props) => (

        <li className={styles.NavigationItem} onClick={props.clicked}>
            <NavLink
                to={props.link}
                activeClassName={styles.active}
                exact={props.exact}>
                {props.children}
            </NavLink>
        </li>
);

export default navigationItem;