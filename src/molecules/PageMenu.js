import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PageMenu extends Component {
    constructor( props ) {
        super( props );
        this.handleClick = this.handleClick.bind( this );
    }

    handleClick() {
        let Main = document.querySelector('.Main');
        Main.classList.remove('Sidebar-is-open');
    }

    render() {
        return (
            <nav className="PageMenu">
                <ul>
                    <li><Link to="/" onClick={this.handleClick}>Home</Link></li>
                    <li><Link to="/dashboard" onClick={this.handleClick}>Dashboard</Link></li>
                </ul>
            </nav>
        )
    }
}

export default PageMenu