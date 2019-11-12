import React from 'react';

import styles from './Input.scss';

const input = (props) => {
    let inputEl = null;
    const inputStyle = [styles.InputEl]
    
    
    switch (props.elType) {
        case ('input') :
            inputEl = <input
                className={inputStyle.join('')}
                onChange={props.changed}
                {...props.elConfig}
            />;
            break;
        case ('select') :
            inputEl = (
                <select
                    className={inputStyle.join('')}
                    onChange={props.changed}
                >
                    <option value="">
                    
                    </option>
                </select>
            );
            break;
        case ('textarea') :
            inputEl = <textarea
                className={inputStyle.join('')}
                onChange={props.changed}
                {...props.elConfig}
                cols="30"
                rows="10"
            />;
            break;
        default:
            inputEl = <input
                className={inputStyle.join('')}
                onChange={props.changed}
                {...props.elConfig}
            />
    }
    
    return (
        <div>
            <label className={styles.Label} htmlFor="">{props.label}</label>
            {inputEl}
        </div>
    );
};

export default input;