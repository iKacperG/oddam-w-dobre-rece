import React, {useEffect, useState} from 'react';
import decoration from "../../../assets/Decoration.svg";


const ContactUs = () => {
    let lorem20 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores eligendi exercitationem fugiat nam non reprehenderit sunt. Est, qui, repellendus.'
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const [wrongName, setWrongName] = useState('')
    const [wrongEmail, setWrongEmail] = useState('')
    const [wrongMessage, setWrongMessage] = useState('')
    const [wrongForm, setWrongForm] = useState('')

    const handleNameBlur = () => {
        console.log([...nameValue])

        if (!nameValue.match(/^[A-Za-z]+$/g)) {
            setWrongName('Imię musi być jednym wyrazem')
        }

    }

    const handleEmailBlur = () => {
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!emailValue.match(re)) {
            setWrongEmail('Email zawiera id,@ oraz nazwę domeny');
        }
    }

    const handleMessageBlur = () => {
        if (messageValue.length < 120) {
            setWrongMessage('Twoja wiadomość musi mieć co najmniej 120 słów')
        }

    }


    const handleNameInput = (event) => {
        setNameValue(event.target.value)

    }

    const handleEmailInput = (event) => {
        setEmailValue(event.target.value)
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{1,})$/i;

        if (emailValue.match(re)) {
            setWrongEmail('');
        }
    }

    const handleMessageArea = (event) => {
        setMessageValue(event.target.value)
        if (!messageValue.length < 120) {
            setWrongMessage('')
        }

    }

    const sendMessage =() => {
        const dataToSend = {
            name: nameValue,
            email: emailValue,
            message: messageValue
        };

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });;
    }

    const handleContactSubmit = (event) => {
        event.preventDefault();
        if (nameValue && emailValue && messageValue) {
            setWrongForm('');
            sendMessage();
        } else {

            console.log(nameValue);
            console.log(emailValue);
            console.log(messageValue);
            setWrongForm('Wszystkie pola muszą być wypełnione')
        }
    }


    useEffect(() => {
        if (nameValue.match(/^[A-Za-z]+$/g)) {
            setWrongName('')
        }
    }, [nameValue])


    return (

        <div className='contact-container'>
            <div className='contact-bg'/>
            <div className='contact-text'>
                <div className='contact-text-center'>
                    <h2>Skontaktuj się z nami</h2>
                    <img src={decoration} className='contact-decoration'/>
                    <form onSubmit={handleContactSubmit}>
                        <div className='input-container'>
                            <div className='input-center'>
                                <label>Wpisz swoje imię</label>
                                <input type='text' placeholder='Krzysztof' onChange={handleNameInput}
                                       onBlur={handleNameBlur}/>
                                <p className='tooltip-wrong'>{wrongName}</p>
                            </div>
                            <div className='input-center'>
                                <label>Wpisz swój email</label>
                                <input type='email' placeholder='abc@xyz.pl' onChange={handleEmailInput}
                                       onBlur={handleEmailBlur}/>
                                <p className='tooltip-wrong'>{wrongEmail}</p>
                            </div>
                        </div>
                        <div className='textarea-container'>
                            <label>Wpisz swoją wiadomość</label>
                            <textarea placeholder={lorem20} cols='50' rows='4' onChange={handleMessageArea}
                                      onBlur={handleMessageBlur}/>
                            <p className='tooltip-wrong'>{wrongMessage}</p>
                        </div>
                        <div className='button-center'>
                            <button type='submit'>Wyślij</button>
                        </div>
                        <p className='tooltip-wrong'>{wrongForm}</p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContactUs;