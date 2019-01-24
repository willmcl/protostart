import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import LoginForm from '../molecules/LoginForm';

class Content extends Component {
    render() {
        return (
            <main className="Content">
                <Route exact path="/" component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/login" component={LoginForm}/>
            </main>
        )
    }
}

export default Content