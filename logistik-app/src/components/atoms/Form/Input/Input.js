import React from 'react';

import styles from './Input.scss';

const input = (props) => {
    let inputEl = null;
    const inputStyle = [styles.InputEl];
    let validationError = null;
    
    if(props.invalid && props.shouldValidate && props.touched) {
        inputStyle.push(styles.Invalid);
        validationError = <p className={styles.Error}>Please enter a valid value!</p>;
    }
    
    switch (props.elType) {
        case ('input') :
            inputEl = <input
                className={inputStyle.join(' ')}
                onChange={props.changed}
                {...props.elConfig}
            />;
            break;
        case ('select') :
            inputEl = (
                <select
                    className={inputStyle.join(' ')}
                    onChange={props.changed}
                >
                    <option value="">
                    
                    </option>
                </select>
            );
            break;
        case ('textarea') :
            inputEl = <textarea
                className={inputStyle.join(' ')}
                onChange={props.changed}
                {...props.elConfig}
                cols="30"
                rows="10"
            />;
            break;
        default:
            inputEl = <input
                className={inputStyle.join(' ')}
                onChange={props.changed}
                {...props.elConfig}
            />
    }
    
    return (
        <div>
            <label className={styles.Label} htmlFor="">{props.label}</label>
            {inputEl}
             {validationError}
        </div>
    );
};

export default input;