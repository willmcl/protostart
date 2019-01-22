import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PageMenu extends Component {
    render() {
        return (
            <nav className="PageMenu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
        )
    }
}

export default PageMenu