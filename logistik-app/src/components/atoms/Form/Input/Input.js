import React from 'react';

import   './Input.scss';

const input = (props) => {
    let inputEl = null;
    let inputStyle = "InputEl";
    let validationError = null;

    if(!props.invalid && props.value.trim() !== '' && props.shouldValidate.required) {
        inputStyle = "InputEl Invalid";
        validationError = <p className='Error'>{props.shouldValidate.error}</p>;
    } else if(props.shouldValidate.required && props.value.trim() !== '') {
        inputStyle = " InputEl ";
    }

    switch (props.elType) {
        case ('input') :
            inputEl = <input
                key={props.elKey}
                className = {inputStyle}
                onChange={props.changed}
                {...props.elConfig}

            />;
            break;
        case ('select') :
            inputEl = (
                <select
                    key={props.elKey}
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
            />;
            break;
        default:
            inputEl = <input
                key={props.elKey}
                className = {inputStyle}
                onChange={props.changed}
                {...props.elConfig}
            />
    }
    
    return (
        <React.Fragment>
            <div>
                <label className="Label" htmlFor="" >{props.label}</label>
                {inputEl}
                 {validationError}
            </div>
        </React.Fragment>
    );
};

export default input;