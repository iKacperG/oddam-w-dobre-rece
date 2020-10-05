import React from 'react';
import {Link} from "react-router-dom";

const GiveButton = ({name, to}) => {
    return <Link to={to} className='link-button'>{name}</Link>
}

export default GiveButton;