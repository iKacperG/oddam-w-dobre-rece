import React from 'react';
import AuthForm from "./AuthForm";
import AuthLook from "../main_page/navbar/AuthLook";
import Navbar from "../main_page/navbar/Navbar";

const RegisterPage = () => {
    return (
        <div className='main-container'>
            <div className='main-center'>
                <AuthLook/>
                <Navbar/>
            </div>
                <AuthForm type='register'/>

        </div>
    )
}

export default RegisterPage