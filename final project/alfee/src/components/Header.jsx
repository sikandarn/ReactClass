// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Alfee</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/Chatbot">ChatBot</Link></li>


                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
