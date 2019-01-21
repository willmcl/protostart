import React, { Component } from 'react';
import Menu from './Menu.js';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <Menu />
                <p>&copy; 2019 Will.</p>
            </div>
        )
    }
}

export default Sidebar