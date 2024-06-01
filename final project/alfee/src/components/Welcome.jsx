// src/components/Welcome.js
import React from 'react';
import './styles/Welcome.css'; // Make sure the path is correct

const Welcome = () => {
    return (
        
        <div className="welcome-container">
            <h2>Welcome to Alfee!</h2>
            <button className="welcome-button">Continue</button>
        </div>
    );
};

export default Welcome;
