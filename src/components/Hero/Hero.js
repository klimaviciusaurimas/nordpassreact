import React from 'react';

const hero = props => (
    <div>
        <div className="layout">
            <div className="hero-grid-left">
                <h1>Get your passwords <br/> organized</h1>
                <button>Get started</button>
            </div>
            <img className="hero-grid-right nordpass-image" src='assets/np-hero-image.png' alt="hero-image"/>
        </div>
    </div>
);

export default hero;