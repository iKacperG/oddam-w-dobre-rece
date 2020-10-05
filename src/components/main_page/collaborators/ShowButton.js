import React, {useEffect} from 'react';

const ShowButton = (props) => {

    const handleLiChange = () => {
        props.setCurrentPage(1);
        props.setActualList(props.target)
        props.setActualText(props.targetText);
    }
    return <button onClick={handleLiChange} className='show-button'>{props.name}</button>
}

export default ShowButton