import React from 'react';

import * as Scroll from 'react-scroll';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

import Anchor from "./Anchor";

const Navbar = () => {

    return (
        <nav className='nav-container'>
            <ul className='nav-list'>
                <Anchor name='Start' whereTo='MainContent'/>
                <Anchor name='O co chodzi?' whereTo='EasySteps'/>
                <Anchor name='O nas' whereTo='AboutUs'/>
                <Anchor name='Fundacje i organizacje' whereTo='Collaborators'/>
                <Anchor name='Kontakt' whereTo='ContactUs'/>
            </ul>
        </nav>
    )
}

export default Navbar;