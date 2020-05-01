import React from "react";
import DrawerOffButton from "./DrawerOffButton";

const drawer = props => {
    let drawerClasses = 'drawer';
    if (props.show) {
        drawerClasses = 'drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <div>
                <DrawerOffButton click={props.drawerOffHandler}/>
            </div>
            <div className="navbar-logo navbar-logo-drawer">
                <a href="/">
                    <img src="https://s1.npass.app/media/1.410.0/images/nordpass/web/logos/nordpass.svg"
                         alt="nordpass logo"/>
                </a></div>
            <ul>
                <li><a className="nav-link" href="/">Features</a></li>
                <li><a className="nav-link" href="/">Pricing</a></li>
                <li><a className="nav-link" href="/">Apps</a></li>
                <li><a className="nav-link" href="/">Blog</a></li>
                <li><a className="nav-link" href="/">Help</a></li>
                <li><a className="nav-link" href="/">My Account</a></li>
                <li><a className="nav-button" href="/" style={{color: '#FFFFFF'}}>Open Vault</a></li>
            </ul>
        </nav>
    );
};

export default drawer;