import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import Drawer from './components/Drawer/Drawer'
import DrawerOffButton from './components/Drawer/DrawerOffButton'
import Hero from './components/Hero/Hero'
import PasswordsSection from './components/PasswordsSection/PasswordsSection'
import Faq from './components/Faq/Faq'
import Business from './components/Business/Business'
import Footer from './components/Footer/Footer'
import './App.scss'
import {ThemeProvider} from "@chakra-ui/core";


class App extends Component {
    state = {
        drawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {drawerOpen: !prevState.drawerOpen};
        });
    };

    drawerOffClickHandler = () => {
        this.setState({drawerOpen: false});
    };

    render() {
        let toggleOff;

        if (this.state.drawerOpen) {
            toggleOff = <DrawerOffButton drawerOffHandler={this.drawerOffClickHandler}/>
        }
        return (
            <ThemeProvider>
                <div className="App">
                    <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
                    <Drawer show={this.state.drawerOpen} drawerOffHandler={this.drawerOffClickHandler}/>
                    {toggleOff}
                    <main style={{marginTop: '60px'}}>
                        <Hero/>
                        <PasswordsSection/>
                        <Faq/>
                        <Business/>
                    </main>
                    <Footer/>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;