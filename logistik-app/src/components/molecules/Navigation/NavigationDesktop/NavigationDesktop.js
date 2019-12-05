import React from 'react';

import styles from './NavigationDesktop.scss';
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from '../SideDrawerMobile/DrawerToggle/DrawerToggle';

const navigationDesktopm = (props) => (
    <React.Fragment>
        <DrawerToggle clicked={props.toggleHandler}/>
        <nav className={styles.DesktopOnly}>
            <NavigationItems isAuth={props.isAuth}/>
        </nav>
    </React.Fragment>
);

export default navigationDesktopm;