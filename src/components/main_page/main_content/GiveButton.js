import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../../providers/UserContext";

const GiveButton = ({name, to}) => {
    const user = useContext(UserContext)
    if(user!==null){
        return   <Link to='/oddaj-rzeczy' className='link-button'>{name}</Link>
    }
    return <Link to={to} className='link-button'>{name}</Link>
}

export default GiveButton;