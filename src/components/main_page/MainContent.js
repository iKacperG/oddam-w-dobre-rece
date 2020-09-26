import React from 'react';
import {Link} from "react-router-dom";
import boxImage from "../../assets/Home-Hero-Image.jpg";
import decoration from "../../assets/Decoration.svg";
import GiveButton from "./GiveButton";

const MainContent = () => {

    return (
        <div className='content-center'>
            <div className='content-bg'/>
            <main>
                <h1>
                    Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <img src={decoration}/>
                <div className='button-group'>
                    <GiveButton name='Oddaj rzeczy' to='oddaj'/>
                    <GiveButton name='Zorganizuj zbiórkę' to='zorganizuj'/>
                </div>
            </main>
        </div>
    )
}

export default MainContent;