import React from 'react';
import { Link } from 'react-router-dom';

const link = (props) => {
    return (
       <Link to={props.linkAddress}>{props.linkText} </Link>
    );
};

export default link;