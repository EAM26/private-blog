import React from 'react';
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/blogposts">Blogposts</Link></li>


        </ul>
    );
}

export default Nav;