import React from 'react';

import decoration from "../../../assets/Decoration.svg";
import shirt from "../../../assets/Icon-1.svg";
import bag from "../../../assets/Icon-2.svg";
import glass from "../../../assets/Icon-3.svg";
import trading from "../../../assets/Icon-4.svg";
import GiveButton from "../main_content/GiveButton";

const EasySteps = () => {

    return (
        <div className='steps-container'>
            <h2>Wystarczą 4 proste kroki</h2>
            <img src={decoration} className='steps-decoration'/>
            <section className='steps-precise'>
                <article><img src={shirt} alt="shirt icon"/>
                    <h3>Wybierz rzeczy</h3>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </article>
                <article><img src={bag} alt="bag icon"/>
                    <h3>Spakuj je</h3>
                    <p>skorzystaj z worków na śmieci</p>
                </article>
                <article><img src={glass} alt="magnifying glass icon"/>
                    <h3>Zadecyduj komu chcesz pomóc</h3>
                    <p>wybierz zaufane miejsce</p>
                </article>
                <article><img src={trading} alt="arrows indicating trading icon"/>
                    <h3>Zamów kuriera</h3>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </article>
            </section>
            <GiveButton name='Oddaj rzeczy' to='oddaj'/>
        </div>
    )
}

export default EasySteps;