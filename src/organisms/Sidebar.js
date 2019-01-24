import React, { Component } from 'react';
import PageMenu from '../molecules/PageMenu.js';
import Greeting from '../molecules/Greeting.js';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <PageMenu />
            </div>
        )
    }
}

export default Sidebar