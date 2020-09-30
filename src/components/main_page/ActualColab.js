import React, {useEffect, useState} from 'react';
import firebase from "../firebase";
import FoundList from "./FoundList";
import OrganizationList from "./OrganizationList";
import LocalList from "./LocalList";
import ShowButton from "./ShowButton";

const ActualColab = () => {

    //Firestore setup
    const [collaborators, setCollaborators] = useState([])
    const foundtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    const organizationtext = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate eaque ex excepturi, fugit itaque natus optio quasi ullam veniam.'
    const localtext = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum eaque facilis harum hic libero magnam quod sit unde voluptatum.'
    const db = firebase.firestore();
    let foundnamelist = collaborators?.foundations?.map((el, index) => {

        return <li>
            <div className='collab-group'>
                <h3 className='collab-name'>{el.name}</h3>
                <h4 className='collab-desc'>{el.description}</h4>
            </div>
            <p className='collab-goods'>{el.goods}</p>
        </li>
    })

    let organizationnamelist = collaborators?.organizations?.map((el, index) => {

        return <li>
            <div className='collab-group'>
                <h3 className='collab-name'>{el.name}</h3>
                <h4 className='collab-desc'>{el.description}</h4>
            </div>
            <p className='collab-goods'>{el.goods}</p>
        </li>
    })

    let localnamelist = collaborators?.locals?.map((el, index) => {

        return <li>
            <div className='collab-group'>
                <h3 className='collab-name'>{el.name}</h3>
                <h4 className='collab-desc'>{el.description}</h4>
            </div>
            <p className='collab-goods'>{el.goods}</p>
        </li>
    })

    useEffect(() => {
        db.collection('collaborators').doc('pShwupzxbacMdftKRhri').get()
            .then(res => {

                return res.data();

            })
            .then(res => {
                setCollaborators(res)
            })
            .catch(err => console.log('failed' + err))

    }, [])


    //lists setup

    const [dnonefoundations, setDnonefoundations] = useState('flex')
    const [dnoneorganizations, setDnoneorganizations] = useState('none')
    const [dnonelocals, setDnonelocals] = useState('none')
    return (
        <div className='collab-container'>
            <div className='collab-center'>
                <div className='button-group'>
                    <ShowButton name='Fundacjom' target={setDnonefoundations}
                                deselect={setDnonelocals}
                                deselect2={setDnoneorganizations}/>
                    <ShowButton name='Organizacjom pozarządowym'
                                target={setDnoneorganizations}
                                deselect={setDnonefoundations} deselect2={setDnonelocals}/>
                    <ShowButton name='Lokalnym zbiórkom' target={setDnonelocals}
                                deselect={setDnonefoundations}
                                deselect2={setDnoneorganizations}/>
                </div>
                <FoundList foundtext={foundtext} foundnamelist={foundnamelist} dnonefoundations={dnonefoundations}/>
                <OrganizationList organizationtext={organizationtext} organizationnamelist={organizationnamelist}
                                  dnoneorganizations={dnoneorganizations}/>
                <LocalList localtext={localtext} localnamelist={localnamelist} dnonelocals={dnonelocals}/>
            </div>
        </div>
    )
}

export default ActualColab;