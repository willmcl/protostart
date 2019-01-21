import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Form from './Form.js';

class Content extends Component {
    render() {
        return (
            <main className="Content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/form" component={Form}/>
            </main>
        )
    }
}

export default Content