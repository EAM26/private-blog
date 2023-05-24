import React from 'react';
import {useNavigate} from "react-router-dom";

function Login({auth, toggleAuth}) {

    const navigate = useNavigate()

    function handleClick() {
        toggleAuth(!auth)
        navigate("/blogposts")
    }

    return (
        <>
            <h1>Login page</h1>
            <button onClick={handleClick}>Inloggen</button>
        </>
    );
}

export default Login;