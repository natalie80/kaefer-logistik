import React from 'react';

const UserInput = props => {
    return (
        <div className='UserInput'>
            <h4>Task-1 UserInput and UserOutput Components</h4>
            <input
                type="text"
                placeholder="text..."
                onChange={props.changed}
                value={props.currentName}/>
        </div>
    )
    
}

export default UserInput;