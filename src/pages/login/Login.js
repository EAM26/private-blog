import React from 'react';
import {useNavigate} from "react-router-dom";

function Login(props) {

    const navigate = useNavigate()

    function handleClick() {
        console.log("Button Clicked")
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