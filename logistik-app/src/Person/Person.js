import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };
    
    return (
        <div className='Person'>
            <p onClick={props.click} style={style}>Ich bin { props.name } und { props.age } Jahre alt</p>
            <p> {props.children } </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}


export default person;