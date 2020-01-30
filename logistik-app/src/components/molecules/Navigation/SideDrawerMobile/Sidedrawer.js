import React from 'react';

import  './Sidedrawer.scss';
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from '../../../atoms/Backdrop/Backdrop';
import DrawerClose from '../SideDrawerMobile/DrawerClose/DrawerClose';
import KaeferIcon from "../../../../assets/Icon_Kaefer/Logo_3.jpg";

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
                <div>
                    <div key="kaefer1">
                        <img className="Kaefer_2" key="kaefer1" src={KaeferIcon} alt=""/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default sidedrawer;