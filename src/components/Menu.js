import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <nav className="Menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/form">Form</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Menu