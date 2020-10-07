import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../providers/UserContext";

const GivePage = () => {
    const user = useContext(UserContext)
    if(user!==null){













    }else if(user===null) {
        return <Link to='/' className='auth-button'>Atytyty nununu hakerzu spadaj na główną</Link>
    }
}

export default GivePage;