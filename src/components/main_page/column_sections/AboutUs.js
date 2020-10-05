import React from 'react';
import decoration from '../../../assets/Decoration.svg'
import signature from '../../../assets/Signature.svg'
const AboutUs = () => {

    return (
        <div className='about-container'>
            <div className='about-text'>
                <div className='about-text-center'>
                    <h2>O nas</h2>
                    <img src={decoration} className='about-decoration'/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={signature} className='about-signature'/>
                </div>
            </div>
            <div className='about-bg'/>
        </div>
    )
}

export default AboutUs;