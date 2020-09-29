import React from 'react';
import facebook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'
const Footer = () => {

    return (
        <footer className='footer-container'>
            <h5>Copyright by CodersLab</h5>
            <div className='icons-container'>
            <img src={facebook} alt='facebook anchor'/>
            <img src={instagram} alt= 'instagram anchor'/>
            </div>
        </footer>
    )
}

export default Footer;