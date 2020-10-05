import React from 'react';
import Navbar from "../main_page/navbar/Navbar";
import AuthLook from "../main_page/navbar/AuthLook";
import decoration from "../../assets/Decoration.svg"
import Register from "../main_page/navbar/Register";
import Login from "../main_page/navbar/Login";

const AuthForm = (props) => {
    if (props.type === 'login') {

        return (<div className='auth-page-center'>
                <h1>Zaloguj się</h1>
                <img src={decoration}/>
                <form id={props.type + '-form'} className='auth-form'>
                    <div className='auth-page-input-group'>
                        <label>Email</label>
                        <input type='email'/>
                        <label>Hasło</label>
                        <input type='password'/>
                    </div>
                </form>
                <div className='auth-page-button-group'>
                   <Register/>
                    <button form={props.type + '-form'} className='auth-button login-button'>Zaloguj się</button>
                </div>

            </div>
        )
    } else if (props.type === 'register') {
        return (<div className='auth-page-center'>
                <h1>Zarejestruj się</h1>
                <img src={decoration}/>
                <form id={props.type + '-form'} className='auth-form'>
                    <div className='auth-page-input-group'>
                        <label>Email</label>
                        <input type='email'/>
                        <label>Hasło</label>
                        <input type='password'/>
                        <label>Powtórz hasło</label>
                        <input type='password'/>
                    </div>
                </form>
                <div className='auth-page-button-group'>
                   <Login/>
                    <button form={props.type + '-form'} className='auth-button login-button'>Zarejestruj się</button>
                </div>

            </div>
        )
    }
}

export default AuthForm