import React, { Component } from 'react';
import Logo from '../atoms/Logo';
import IconMenu from '../atoms/IconMenu';
import Greeting from './Greeting';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <IconMenu />
                <Logo />
                <Greeting />
            </div>
        )
    }
}

export default Header;