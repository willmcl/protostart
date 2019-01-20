import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from './components/Menu.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Form from './components/Form.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Menu/>
                        <main className="Content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/form" component={Form}/>
                        </main>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
