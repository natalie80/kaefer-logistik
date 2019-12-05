import React from 'react';

import styles from './DrawerToggle.scss';

const drawerToggle = (props) => (
    <div onClick={props.clicked} className={styles.DrawerToggle}>
        <div/>
        <div/>
        <div/>
    </div>
);


export default drawerToggle;
