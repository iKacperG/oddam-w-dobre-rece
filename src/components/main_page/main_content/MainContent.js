import React from 'react';
import {Link} from "react-router-dom";
import boxImage from "../../../assets/Home-Hero-Image.jpg";
import decoration from "../../../assets/Decoration.svg";
import GiveButton from "./GiveButton";
import GiveStep from "../../oddaj/GiveStep";

const MainContent = ({page}) => {

    if (page === 'give') {
        return (
            <>
            <div className='content-center'>
                <div className='give-content-bg'/>
                <main>
                    <h1 className='content-header'>
                        Oddaj rzeczy, których już nie chcesz <br/>
                        POTRZEBUJĄCYM
                    </h1>
                    <img src={decoration}/>
                    <div className='steps-group'>
                        <h2>Wystarczą 4 proste kroki:</h2>
                        <div className='give-step-container'>

                            <GiveStep ordinal={1} step='Wybierz rzeczy'/>
                            <GiveStep ordinal={2} step='Spakuj je w worki'/>
                            <GiveStep ordinal={3} step='Wybierz fundację'/>
                            <GiveStep ordinal={4} step='Zamów kuriera'/>
                        </div>
                    </div>
                </main>
            </div>

       </>
        )

    }
    return (
        <div className='content-center'>
            <div className='content-bg'/>
            <main>
                <h1 className='content-header'>
                    Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <img src={decoration}/>
                <div className='button-group'>
                    <GiveButton name='Oddaj rzeczy' to='logowanie'/>
                    <GiveButton name='Zorganizuj zbiórkę' to='logowanie'/>
                </div>
            </main>
        </div>
    )
}

export default MainContent;