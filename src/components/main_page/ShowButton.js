import React from 'react';

const ShowButton = (props) => {

    const handleLiChange = () => {
        props.target('flex')
        props.deselect('none');
        props.deselect2('none');
    }
    return <button onClick={handleLiChange} className='show-button'>{props.name}</button>
}

export default ShowButton