import React from 'react';
import decoration from "../../../assets/Decoration.svg";


const ContactUs = () => {
    let lorem20 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores eligendi exercitationem fugiat nam non reprehenderit sunt. Est, qui, repellendus.'
    return (
        <div className='contact-container'>
            <div className='contact-bg'/>
            <div className='contact-text'>
                <div className='contact-text-center'>
                    <h2>Skontaktuj się z nami</h2>
                    <img src={decoration} className='contact-decoration'/>
                    <form>
                        <div className='input-container'>
                            <div className='input-center'>
                                <label>Wpisz swoje imię</label>
                                <input type='text' placeholder='Krzysztof'/>
                            </div>
                            <div className='input-center'>
                                <label>Wpisz swój email</label>
                                <input type='email' placeholder='abc@xyz.pl'/>
                            </div>
                        </div>
                        <div className='textarea-container'>
                            <label>Wpisz swoją wiadomość</label>
                            <textarea placeholder={lorem20} cols='50' rows='4'/>
                        </div>
                        <div className='button-center'>
                        <button>Wyślij</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default ContactUs;