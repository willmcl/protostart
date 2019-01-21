import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu.js';
import Content from './components/Content.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div className="AppContainer">
                        <Menu/>
                        <Content/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
