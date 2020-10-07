import React, {useEffect, useState} from 'react';
import decoration from '../../../assets/Decoration.svg';
import firebase from '../../firebase';
import ActualCollab from "./ActualColab";


const Collaborators = () => {


    return (
        <div className='collab-container'>
            <h2>Komu pomagamy?</h2>
            <img src={decoration}/>
            <ActualCollab/>
        </div>
    )
}

export default Collaborators;