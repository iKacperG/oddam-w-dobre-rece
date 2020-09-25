import React from 'react';
import AuthLook from "./AuthLook";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Achievements from "./Achievements";
import EasySteps from "./EasySteps";
import AboutUs from "./AboutUs";
import Collaborators from "./Collaborators";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Container from "./Container";

const Home = () => {
    return (
        <div className='main-container'>

                <AuthLook/>
                <Navbar/>
                <MainContent/>
                <Achievements/>
                <EasySteps/>
                <AboutUs/>
                <Collaborators/>
                <ContactUs/>
                <Footer/>


        </div>
    )
}

export default Home;

