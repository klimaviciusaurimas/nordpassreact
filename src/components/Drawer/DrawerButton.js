import React from 'react';
import './DrawerButton.scss';

const drawerButton = props => (

    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
    </button>

);

export default drawerButton;