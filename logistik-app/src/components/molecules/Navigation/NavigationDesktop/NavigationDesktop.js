import React from 'react';

import  './NavigationDesktop.scss';
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from '../SideDrawerMobile/DrawerToggle/DrawerToggle';

const NavigationDesktopm = (props) => (
    <React.Fragment>
        <DrawerToggle clicked={props.toggleHandler}/>
        <nav className="DesktopOnly">
            <NavigationItems isAuth={props.isAuth}/>
        </nav>
    </React.Fragment>
);

export default NavigationDesktopm;