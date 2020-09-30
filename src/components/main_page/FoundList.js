import React, {useState} from 'react'
import ShowButton from "./ShowButton";

const FoundList = (props) => {

    return (
        <>

            <div className='flex-change' style={{display:props.dnonefoundations}}>
                <div className='collab-main-desc'>{props.foundtext}</div>
                <ul className='collab-list foundlist '>
                    {props.foundnamelist}
                </ul>
            </div>
        </>
    )
}

export default FoundList