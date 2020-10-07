import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../providers/UserContext";
import AuthLook from "../main_page/navbar/AuthLook";
import Navbar from "../main_page/navbar/Navbar";
import MainContent from "../main_page/main_content/MainContent";
import Achievements from "../main_page/column_sections/Achievements";
import EasySteps from "../main_page/column_sections/EasySteps";
import AboutUs from "../main_page/column_sections/AboutUs";
import Collaborators from "../main_page/collaborators/Collaborators";
import ContactUs from "../main_page/contact/ContactUs";
import Footer from "../main_page/footer/Footer";
import Disclaimer from "./Disclaimer";

const GivePage = () => {
    const user = useContext(UserContext)
    if (user !== null) {


        return (
            <>
                <div className='main-container'>
                    <div className='main-center'>
                        <AuthLook/>
                        <Navbar/>
                    </div>
                    <MainContent page='give'/>
                </div>
              <Disclaimer/>
                <div className='sections-container'>
                    <ContactUs/>
                    <Footer/>
                </div>

            </>
        )


    } else if (user === null) {
        return <Link to='/' className='auth-button'>Atytyty nununu hakerzu spadaj na główną</Link>
    }
}

export default GivePage;