import React from 'react';

const GiveStep = ({ordinal, step}) => {
    return (
        <>
            <div className='give-step-center'>
                <div className='give-step-rotated'>
                    <p>{ordinal}</p>
                    <h5>{step}</h5>
                </div>
            </div>
        </>
    )
}

export default GiveStep;