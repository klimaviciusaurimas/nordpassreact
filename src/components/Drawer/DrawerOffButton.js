import React from 'react';
import './DrawerOffButton.scss';

const drawerOffButton = props => (

    <div className="toggle-button-off" onClick={props.click}>
        <img className="toggle-button-off-svg" src="https://cdn.onlinewebfonts.com/svg/img_545682.png" alt="offButton"/>
    </div>

);

export default drawerOffButton;