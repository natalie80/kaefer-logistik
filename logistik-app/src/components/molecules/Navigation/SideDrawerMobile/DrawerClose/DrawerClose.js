import React from "react";

import  "./DrawerClose.scss";

const drawerClose = (props) => (
    props.show ?
        <div className="CloseButton" onClick={props.clicked}>
            <div></div>
            <div></div>
        </div>
    : null
);

export default drawerClose;