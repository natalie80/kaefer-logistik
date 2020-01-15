import React from 'react';


const radioButton = (props) => (
<input
        className = {inputStyle}
        onChange={props.changed}
        checked={props.checked}
        {...props.elConfig}

    />

);

export default radioButton;
