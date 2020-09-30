import React, {useState} from 'react'
import ShowButton from "./ShowButton";

const OrganizationList = (props) => {

    return (
        <>
            <div className='flex-change' style={{display:props.dnoneorganizations}}>
                <div className='collab-main-desc'>{props.organizationtext}</div>
                <ul className='collab-list foundlist '>
                    {props.organizationnamelist}
                </ul>
            </div>
        </>
    )
}

export default OrganizationList