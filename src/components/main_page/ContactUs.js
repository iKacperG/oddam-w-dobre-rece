import React from 'react';
import decoration from "../../assets/Decoration.svg";


const ContactUs = () => {
let lorem40 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem beatae corporis culpa dicta dignissimos eaque expedita hic illo in inventore laboriosam libero nam obcaecati odit perferendis perspiciatis placeat quae, quisquam quod sapiente sunt totam? At laudantium magnam nihil voluptatibus.'
    return (
        <div className='contact-container'>
            <div className='contact-bg'/>
            <div className='contact-text'>
                <div className='contact-text-center'>
                    <h2>Skontaktuj się z nami</h2>
                    <img src={decoration} className='contact-decoration'/>
                    <form>
                        <label>Wpisz swoje imię
                        <input type='text' placeholder='Krzysztof'/></label>
                        <label>Wpisz swój email
                        <input type='email' placeholder='abc@xyz.pl'/></label>
                        <label>Wpisz swoją wiadomość
                        <textarea placeholder={lorem40} cols='20' rows='20'/></label>
                        <button>Wyślij</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default ContactUs;