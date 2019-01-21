import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LoginLink from './LoginLink.js';

class Menu extends Component {
    render() {
        return (
            <nav className="Menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <LoginLink/>
                </ul>
            </nav>
        )
    }
}

export default Menu