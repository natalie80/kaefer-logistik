import React from 'react';

import  './Sidedrawer.scss';
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from '../../../atoms/Backdrop/Backdrop';
import Hoc from '../../../../hoc/hoc';
import DrawerClose from '../SideDrawerMobile/DrawerClose/DrawerClose';

const sidedrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
  
    return (
        <React.Fragment>
            <Backdrop clicked={props.closed} show={props.open} />
            <div className={attachedClasses.join(' ')}>
                <DrawerClose clicked={props.closed} show={props.open} />
                <nav className="NavigationMobile">
                    <NavigationItems isAuth={props.isAuth} clicked={props.closed}/>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sidedrawer;