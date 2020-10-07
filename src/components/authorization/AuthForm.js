import React, {createContext, useEffect, useState} from 'react';
import Navbar from "../main_page/navbar/Navbar";
import AuthLook from "../main_page/navbar/AuthLook";
import decoration from "../../assets/Decoration.svg"
import Register from "../main_page/navbar/Register";
import Login from "../main_page/navbar/Login";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase";

const AuthForm = (props) => {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [password2Value, setPassword2Value] = useState('');

    const [wrongPassword, setWrongPassword] = useState('')
    const [wrongPassword2, setWrongPassword2] = useState('')
    const [wrongEmail, setWrongEmail] = useState('')
    const [wrongForm, setWrongForm] = useState('')
    const [wrongCredentials, setWrongCredentials] = useState('')

    const auth = firebase.auth();
    const db = firebase.firestore();
    const history = useHistory();

    const passwordCheck = () => {

        if (passwordValue.length < 6) {
            setWrongPassword('Hasło musi mieć przynajmniej 6 znaków')
            return false
        }else{
            setWrongPassword('')
        }
    }
    const password2Check = () => {

        if (password2Value.length < 6 || password2Value !== passwordValue) {
            setWrongPassword2('Pole musi zawierać przynajmniej 6, pokrywających się z hasłem')
            return false
        }else{
            setWrongPassword2('')
        }
    }

    const emailCheck = () => {
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!emailValue.match(re)) {
            setWrongEmail('Email zawiera id,@ oraz nazwę domeny');
            return false
        }else{
            setWrongEmail('')
        }
    }

    const handlePasswordInput = (event) => {
        setPasswordValue(event.target.value)
    }

    const handlePassword2Input = (event) => {
        setPassword2Value(event.target.value)

    }

    const handleEmailInput = (event) => {
        setEmailValue(event.target.value)
    }

    const validateRegister = (event) => {
        event.preventDefault();
        emailCheck();
        passwordCheck();
        password2Check()
        if(emailCheck()===false || passwordCheck()===false || password2Check()===false) {

            return false

        }else{
            auth.createUserWithEmailAndPassword(emailValue,passwordValue)

                .then(()=>{
                    db.collection('users').doc(auth.currentUser.uid).set({email:emailValue})
                        .catch(err=>err);
                    history.push('/')
                })
            return true
        }
    };


    const validateLogin = (event) => {

        event.preventDefault();
        emailCheck();
        passwordCheck();
        if(emailCheck() && passwordCheck()){
            return false

        }else{
            auth.signInWithEmailAndPassword(emailValue,passwordValue)
                .then(() =>{auth.onAuthStateChanged((userAuth) => {
                    if(userAuth){
                        setWrongCredentials('');
                        history.push('/');
                        console.log(userAuth+'logged');


                    }else{
                        console.log('fail')
                    }

                })}).catch(err=>setWrongCredentials('Wrong credentials'));

            return true
        }
    };


    if (props.type === 'login') {

        return (<div className='auth-page-center'>
                <h1>Zaloguj się</h1>
                <img src={decoration}/>
                <form id={props.type + '-form'} className='auth-form' onSubmit={validateLogin}>
                    <div className='auth-page-input-group'>
                        <label>Email</label>
                        <input type='email' onChange={handleEmailInput}/>
                        <p className='tooltip-wrong'>{wrongEmail}</p>
                        <label>Hasło</label>
                        <input type='password' onChange={handlePasswordInput}/>
                        <p className='tooltip-wrong'>{wrongPassword}</p>
                        <p className='tooltip-wrong'>{wrongCredentials}</p>
                    </div>
                </form>
                <div className='auth-page-button-group'>
                    <Register/>
                    <button form={props.type + '-form'} className='auth-button login-button'>Zaloguj
                        się
                    </button>
                </div>

            </div>
        )
    } else if (props.type === 'register') {

        return (<div className='auth-page-center'>
                <h1>Zarejestruj się</h1>
                <img src={decoration}/>
                <form id={props.type + '-form'} className='auth-form' onSubmit={validateRegister}>
                    <div className='auth-page-input-group'>
                        <label>Email</label>
                        <input type='email' onChange={handleEmailInput}/>
                        <p className='tooltip-wrong'>{wrongEmail}</p>
                        <label>Hasło</label>
                        <input type='password' onChange={handlePasswordInput}/>
                        <p className='tooltip-wrong'>{wrongPassword}</p>
                        <label>Powtórz hasło</label>
                        <input type='password' onChange={handlePassword2Input}/>
                        <p className='tooltip-wrong'>{wrongPassword2}</p>
                    </div>
                </form>
                <div className='auth-page-button-group'>
                    <Login/>
                    <button form={props.type + '-form'} className='auth-button login-button'>
                        Zarejestruj się
                    </button>
                </div>

            </div>
        )
    }

    else if (props.type === 'logout') {
        return (
            <div className='auth-page-center auth-page-logout'>
                <h1>Wylogowanie nastąpiło <br/>pomyślnie!</h1>
                <img src={decoration}/>
                <Link className='main-page-link' to='/'>Strona Główna</Link>
            </div>
        )
    }
}



export default AuthForm