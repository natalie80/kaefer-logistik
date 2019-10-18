import React from 'react';

const validationText = (props) => {
    let validationMessage = '--Text long enough!--';
    if (props.lengthText <= 5) {
        validationMessage = '--Text too short!--';
    }
    return (
        <div className='Validation'>
            <input type="text" onChange={props.changed} />
            <p>The entered text is:  {props.enteredText} </p>
            <p>The length of entered text is:  {props.lengthText} </p>
            <p>{validationMessage}</p>
        </div>
        
        )
};

export default validationText;