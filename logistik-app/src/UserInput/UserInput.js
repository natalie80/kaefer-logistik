import React from 'react';

const UserInput = props => {
    return (
        <div className='UserInput'>
            <input
                type="text"
                placeholder="text..."
                onChange={props.changed}
                value={props.currentName}/>
        </div>
    )
    
}

export default UserInput;