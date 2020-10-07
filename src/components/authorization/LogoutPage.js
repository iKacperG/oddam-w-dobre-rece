import React from 'react';
import AuthForm from "./AuthForm";
import AuthLook from "../main_page/navbar/AuthLook";
import Navbar from "../main_page/navbar/Navbar";
import {Link} from "react-router-dom";

const LogoutPage = () => {
    return (
        <div className='main-container'>
            <div className='main-center'>
                <AuthLook/>
                <Navbar/>
            </div>
            <AuthForm type='logout'/>
        </div>
    )
}

export default LogoutPage