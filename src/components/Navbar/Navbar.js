import React from 'react';
import DrawerButton from '../Drawer/DrawerButton'

const navbar = props => (
    <header className="navbar">
        <nav className="nav">
            <div className="nav-toggle-button">
                <DrawerButton click={props.drawerClickHandler}/>
            </div>
            <div className="navbar-logo">
                <a href="/">
                    <img src="https://s1.npass.app/media/1.410.0/images/nordpass/web/logos/nordpass.svg"
                         alt="nordpass logo"/>
                </a>
            </div>
            <div className="nav-items-button">
                <div className="nav-items">
                    <ul>
                        <li><a className="nav-link" href="/">Features</a></li>
                        <li><a className="nav-link" href="/">Pricing</a></li>
                        <li><a className="nav-link" href="/">Apps</a></li>
                        <li><a className="nav-link" href="/">Blog</a></li>
                        <li><a className="nav-link" href="/">Help</a></li>
                        <li><a className="nav-link" href="/">My Account</a></li>
                    </ul>
                </div>
                <a className="nav-button" href="/">Open Vault</a>
            </div>
        </nav>
    </header>
);

export default navbar;