import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Login from './Login.js';
import Logout from './Logout.js';

class Content extends Component {
    render() {
        return (
            <main className="Content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
            </main>
        )
    }
}

export default Content