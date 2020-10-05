import React from 'react';
import AuthLook from "./navbar/AuthLook";
import Navbar from "./navbar/Navbar";
import MainContent from "./main_content/MainContent";
import Achievements from "./column_sections/Achievements";
import EasySteps from "./column_sections/EasySteps";
import AboutUs from "./column_sections/AboutUs";
import Collaborators from "./collaborators/Collaborators";
import ContactUs from "./contact/ContactUs";
import Footer from "./footer/Footer";


const Home = () => {
    return (
        <>
        <div className='main-container'>
            <div className='main-center'>
                <AuthLook/>
                <Navbar/>
            </div>
                <MainContent/>
        </div>
            <div className='sections-container'>
                <Achievements/>
                <EasySteps/>
                <AboutUs name='AboutUs'/>
                <Collaborators/>
                <ContactUs/>
                <Footer/>
            </div>
            </>

    )
}

export default Home;

