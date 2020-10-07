import React, {useContext} from 'react';
import Login from "./Login";
import Register from "./Register";
import {UserContext} from "../../../providers/UserContext";
import {Link} from "react-router-dom";
import HelloMessage from "./HelloMessage";

const AuthLook = () => {
    const user = useContext(UserContext)
    if(user!==null){
        return    <div className='auth-container'>
           <HelloMessage mail={user.email}/>
            <Login/>
            <Register/>
        </div>
    }
    return (
        <div className='auth-container'>
            <Login/>
            <Register/>
        </div>
    )
}

export default AuthLook;