import React, {useEffect, useState} from 'react';
import firebase from "../../firebase";
import PageButton from "./PageButton";

const ActualCollab = () => {

    const [collaborators, setCollaborators] = useState([])
    const [actualCollabType, setActualCollabType] = useState('foundations');
    const [collabsPerPage, setCollabsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)

    const db = firebase.firestore();

    const descriptions = {
        foundations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        organizations: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        locals: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    }
//-----------------------------GET WHOLE DOCUMENT, DONE ONCE-----------------------------------------------------------
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

    //---------------------WHAT RENDERS AT LAST--------------------------------------
    const loadList = (actualCollabType) => {

        //----------------------------PAGINATION LOGIC--------------------------------------------

        const indexOfLastCollab = currentPage * collabsPerPage;
        const indexOfFirstCollab = indexOfLastCollab - collabsPerPage;
        const currentCollabsPage = collaborators?.[actualCollabType]?.slice(indexOfFirstCollab, indexOfLastCollab);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(collaborators?.[actualCollabType]?.length / collabsPerPage); i++) {
            pageNumbers.push(i);
        }

        let renderPageNumbers = pageNumbers.map(number => {
            if (pageNumbers.length !== 1) {
                return <PageButton number={number} setCurrentPage={setCurrentPage}/>
            }
        });
        //------------------------WHAT TO RENDER IN LIs----------------------------------------
        const renderList = currentCollabsPage?.map(el => {
            return (
                <>
                    <li>
                        <div className='collab-group'>
                            <h3 className='collab-name'>{el.name}</h3>
                            <h4 className='collab-desc'>{el.description}</h4>
                        </div>
                        <p className='collab-goods'>{el.goods}</p>
                    </li>
                </>
            )
        })
        //-----------------------------WHERE TO RENDER----------------------------------------
        return (
            <div className='collab-container'>
                <div className='collab-center'>
                    <div className='button-group'>
                        {/*---------CHANGE COLLAB TYPE AND SET PAGE TO 1----------------------*/}
                        <button className='show-button' onClick={() => {
                            setActualCollabType("foundations");
                            setCurrentPage(1);
                        }}>Fundacjom
                        </button>
                        <button className='show-button' onClick={() => {
                            setActualCollabType("organizations");
                            setCurrentPage(1);
                        }}>Organizacjom pozarządowym
                        </button>
                        <button className='show-button' onClick={() => {
                            setActualCollabType("locals");
                            setCurrentPage(1);
                        }}>Lokalnym zbiórkom
                        </button>

                    </div>
                    <div className='collab-main-desc'>{descriptions[actualCollabType]}</div>

                    <div className='collab-page-container'>
                        <ul className='collab-list'>
                            {renderList}
                        </ul>
                        <ul className='page-numbers'>
                            {renderPageNumbers}
                        </ul>
                    </div>
                </div>
            </div>

        )

    }
    {/*ACTUAL OUTCOME*/
    }
    return loadList(actualCollabType);
}

export default ActualCollab;


// import React, {useEffect, useState} from 'react';
// import firebase from "../../firebase";
// import ShowButton from "./ShowButton";
// import ActualList from "./ActualList";
// import PageButton from "./PageButton";
//
// const ActualColab = () => {
//
//     const [collaborators, setCollaborators] = useState([])
//
//     const foundText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
//     const organizationText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate eaque ex excepturi, fugit itaque natus optio quasi ullam veniam.'
//     const localText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum eaque facilis harum hic libero magnam quod sit unde voluptatum.'
//
//     const db = firebase.firestore();
//
//     const [collabsPerPage, setCollabsPerPage] = useState(3)
//     const [currentPage, setCurrentPage] = useState(1)
//
//
//     useEffect(() => {
//
//         setActualList(listMapper(collaborators?.organizations))
//
//     }, [currentPage])
//
//     const listMapper = (promiseData) => {
//
//         const indexOfLastCollab = currentPage * collabsPerPage;
//         const indexOfFirstCollab = indexOfLastCollab - collabsPerPage;
//         const currentCollabs = promiseData?.slice(indexOfFirstCollab, indexOfLastCollab);
//
//
//         const pageNumbers = [];
//         for (let i = 1; i <= Math.ceil(promiseData?.length / collabsPerPage); i++) {
//             pageNumbers.push(i);
//         }
//
//
//         let renderPageNumbers = pageNumbers.map(number => {
//             return (
//                 <PageButton number={number} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
//             );
//         });
//
//
//         const renderList = currentCollabs?.map(el => {
//             return <ul className='collab-list foundlist '>
//                 <li>
//                     <div className='collab-group'>
//                         <h3 className='collab-name'>{el.name}</h3>
//                         <h4 className='collab-desc'>{el.description}</h4>
//                     </div>
//                     <p className='collab-goods'>{el.goods}</p>
//                 </li>
//             </ul>
//         })
//         return <>
//             <div className='collab-page-container'>
//                 <ul className='collab-list'>
//                     {renderList}
//                 </ul>
//                 <ul className='page-numbers'>
//                     {renderPageNumbers}
//                 </ul>
//             </div>
//         </>
//     }
//
//
//     const [actualList, setActualList] = useState(undefined)
//     const [actualText, setActualText] = useState(foundText)
//
//     useEffect(() => {
//         db.collection('collaborators').doc('pShwupzxbacMdftKRhri').get()
//             .then(res => {
//
//                 return res.data();
//
//             })
//             .then(res => {
//                 setCollaborators(res)
//             })
//             .catch(err => console.log('failed' + err))
//
//     }, [])
//
//     useEffect(() => {
//
//         setActualList(listMapper(collaborators?.foundations))
//
//     }, [collaborators])
//     useEffect(() => {
//
//     }, [currentPage])
//
//     return (
//         <div className='collab-container'>
//             <div className='collab-center'>
//                 <div className='button-group'>
//                     <ShowButton name='Fundacjom' setActualList={setActualList} currentPage={currentPage}
//                                 target={listMapper(collaborators?.foundations)} setActualText={setActualText}
//                                 targetText={foundText} setCurrentPage={setCurrentPage}/>
//                     <ShowButton name='Organizacjom pozarządowym' setActualList={setActualList} currentPage={currentPage}
//                                 target={listMapper(collaborators?.organizations)} setActualText={setActualText}
//                                 targetText={organizationText} setCurrentPage={setCurrentPage}/>
//                     <ShowButton name='Lokalnym zbiórkom' setActualList={setActualList} currentPage={currentPage}
//                                 target={listMapper(collaborators?.locals)} setActualText={setActualText}
//                                 targetText={localText} setCurrentPage={setCurrentPage}/>
//                 </div>
//                 <div className='collab-main-desc'>{actualText}</div>
//
//                 <ActualList render={actualList}/>
//
//             </div>
//         </div>
//     )
// }
//
// export default ActualColab;