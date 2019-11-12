import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";


const Greeting = ({ currentUser, logout }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login" className="GreenButtonNoArrow">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup" className='GreenButtonNoArrow'>Sign up</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="neon">WELCOME, {currentUser.email}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;