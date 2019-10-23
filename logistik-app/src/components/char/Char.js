import React from 'react';

const charBox = (props) => {
   
   const charStyle = {
      display: 'inline-block',
      padding: '10px',
      margin: '5px',
      border: '1px solid black',
      width: '50px',
      textAlign: 'center'
   }
   return (
       <div style={charStyle} onClick={props.clicked}>{props.character} </div>
   )
};

export default charBox;
