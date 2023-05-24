import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function Nav({auth, toggleAuth}) {

    const navigate = useNavigate()

    function handleClick() {
        toggleAuth(!auth)
        navigate("../home")

    }
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                {!auth && <li><Link to="/login">Login</Link></li>}
                {auth && <li><Link to="/blogposts">Blogposts</Link></li>}
            </ul>
            {auth && <button  onClick={handleClick}>Log Out</button>}
        </>


    );
}

export default Nav;