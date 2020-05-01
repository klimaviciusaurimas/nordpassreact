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
            <div className="App">
                <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <Drawer show={this.state.drawerOpen}/>
                {toggleOff}
                <main style={{marginTop: '64px', padding: '5%'}}>
                    <Hero/>
                    <PasswordsSection/>
                    <Faq/>
                    <Business/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;