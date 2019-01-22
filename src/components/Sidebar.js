import React, { Component } from 'react';
import PageMenu from './PageMenu.js';
import Greeting from './Greeting.js';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <PageMenu />
                <Greeting />
                <p>&copy; 2019 Will.</p>
            </div>
        )
    }
}

export default Sidebar