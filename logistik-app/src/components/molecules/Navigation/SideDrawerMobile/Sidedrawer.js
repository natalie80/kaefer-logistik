import React from 'react';

import styles from './Sidedrawer.scss';
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from '../../../atoms/Backdrop/Backdrop';
import Hoc from '../../../../hoc/hoc';
import DrawerClose from '../SideDrawerMobile/DrawerClose/DrawerClose';

const sidedrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <Hoc>
          <Backdrop clicked={props.closed} show={props.open} />
          <div className={attachedClasses.join(' ')}>
                <DrawerClose clicked={props.closed} show={props.open} />
                <nav className={styles.NavigationMobile}>
                    <NavigationItems isAuth={props.isAuth} clicked={props.closed}/>
                </nav>
          </div>
        </Hoc>
    );
};

export default sidedrawer;