import React, {useContext} from 'react';

import {Link} from "react-router-dom";
import {UserContext} from "../../../providers/UserContext";

const Login = () => {
    const user = useContext(UserContext);
    if(user!==null){
     return   <Link to='/oddaj-rzeczy' className='auth-button'>Oddaj rzeczy</Link>
    }
    return <Link to='/logowanie' className='auth-button'>Zaloguj się</Link>
}

export default Login;