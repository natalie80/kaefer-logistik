import React, { useState }  from 'react';

const UserOutput = (props) => {
    const [animalsState, setAnimalsState] = useState({
        animals: [
            {animal: 'Tiger'},
            {animal:'Cat'},
            {animal: 'Mouse'},
        ]
    });


    return (
        <div className='UserOutput'>
            <p>{animalsState.animals[0].animal}</p>
            <p>{animalsState.animals[1].animal}</p>
            <p>{animalsState.animals[2].animal}</p>
            <p>{props.name}</p>
        </div>
    );
}

export default UserOutput;