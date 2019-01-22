import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.js';
import Dashboard from './Dashboard.js';
import Login from './Login.js';

class Content extends Component {
    render() {
        return (
            <main className="Content">
                <Route exact path="/" component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/login" component={Login}/>
            </main>
        )
    }
}

export default Content