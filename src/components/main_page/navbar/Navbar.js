import React from 'react';

import * as Scroll from 'react-scroll';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

import Anchor from "./Anchor";

const Navbar = () => {

    return (
        <nav className='nav-container'>
            <ul className='nav-list'>
                <Anchor typed='Start' whereTo='content-header'/>
                <Anchor typed='O co chodzi?' whereTo='achievements-container'/>
                <Anchor typed='O nas' whereTo='about-container'/>
                <Anchor typed='Fundacje i organizacje' whereTo='collab-container'/>
                <Anchor typed='Kontakt' whereTo='contact-container'/>
            </ul>
        </nav>
    )
}

export default Navbar;