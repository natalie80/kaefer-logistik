import React from 'react';

import   './Input.scss';

const input = (props) => {
    let inputEl = null;
    let inputStyle = "InputEl";
    let validationError = null;
    
    if(props.invalid && props.shouldValidate && props.touched) {
        inputStyle = "Invalid";
        validationError = <p className='Error'>Please enter a valid value!</p>;
    }
    
    switch (props.elType) {
        case ('input') :
            inputEl = <input
                className = {inputStyle}
                onChange={props.changed}
                {...props.elConfig}
            />;
            break;
        case ('select') :
            inputEl = (
                <select
                    className = {inputStyle}
                    onChange={props.changed}
                >
                    <option value="">
                    
                    </option>
                </select>
            );
            break;
        case ('textarea') :
            inputEl = <textarea
                className = {inputStyle}
                onChange={props.changed}
                {...props.elConfig}
                cols="30"
                rows="10"
            />;
            break;
        default:
            inputEl = <input
                className = {inputStyle}
                onChange={props.changed}
                {...props.elConfig}
            />
    }
    
    return (
        <div>
            <label className="Label" htmlFor="">{props.label}</label>
            {inputEl}
             {validationError}
        </div>
    );
};

export default input;