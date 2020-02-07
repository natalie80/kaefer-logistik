import React from "react";

import  "./DrawerClose.scss";

const DrawerClose = (props) => (
    props.show ?
        <div className="CloseButton" onClick={props.clicked}>
            <div />
            <div />
        </div>
    : null
);

export default DrawerClose;