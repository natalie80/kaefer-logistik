import React from 'react';

import   './Input.scss';

const input = (props) => {
    let inputEl = null;
    let inputStyle = "InputEl";
    let radioStyle = props.elConfig.type === 'radio' ? 'CustomerSalutation' : '';
    let validationError = null;
  //  console.log('hier is invalid validate ',props.invalid, props.shouldValidate);
    if(!props.invalid && props.value.trim() !== '' && props.shouldValidate.required) {
        console.log('ADD ERROR');
        inputStyle = "InputEl Invalid";
        validationError = <p className='Error'>{props.shouldValidate.error}</p>;
    }

    if(props.shouldValidate.required && props.value.trim() !== '') {
        console.log('KEINE ERROR');
        inputStyle = " InputEl ";
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
        <React.Fragment>
            <div className={radioStyle}>
                <label className="Label" htmlFor="">{props.label}</label>
                {inputEl}
                 {validationError}
            </div>
        </React.Fragment>
    );
};

export default input;