import React, {useEffect, useState} from 'react';
import decoration from '../../../assets/Decoration.svg';
import ActualColab from "./ActualColab";
import firebase from '../../firebase';


const Collaborators = () => {


    return (
        <div className='collab-container'>
            <h2>Komu pomagamy?</h2>
            <img src={decoration}/>
            <ActualColab/>
        </div>
    )
}

export default Collaborators;