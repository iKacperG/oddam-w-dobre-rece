import React from 'react';
import Login from "./Login";
import Register from "./Register";

const AuthLook = () => {

    return (
        <div className='auth-container'>
            <Login/>
            <Register/>
        </div>
    )
}

export default AuthLook;