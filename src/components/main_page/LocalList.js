import React, {useState} from 'react'
import ShowButton from "./ShowButton";

const LocalList = (props) => {

    return (
        <>

            <div className='flex-change' style={{display:props.dnonelocals}}>
                <div className='collab-main-desc'>{props.localtext}</div>
                <ul className='collab-list foundlist '>
                    {props.localnamelist}
                </ul>
            </div>
        </>
    )
}

export default LocalList