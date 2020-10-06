import React, {useEffect} from 'react';

const PageButton = ({number,setCurrentPage}) => {

    const handlePageClick = (event) => {

        setCurrentPage(Number(event.target.id));

    }



    return (
        <li className='page-button'
            key={number}
            id={number}
            onClick={handlePageClick}>
            {number}
        </li>
    )
}

export default PageButton;