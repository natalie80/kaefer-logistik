import React from "react";

import styles from "./DrawerClose.scss";

const drawerClose = (props) => (
    props.show ?
        <div className={styles.CloseButton} onClick={props.clicked}>
            <div></div>
            <div></div>
        </div>
    : null
);

export default drawerClose;