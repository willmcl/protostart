import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import LoginForm from '../molecules/LoginForm';

class Content extends Component {

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
            <main className="Content">
                <div className="ContentOverlay" onClick={this.handleClick}></div>
                <Route exact path="/" component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/login" component={LoginForm}/>
            </main>
        )
    }
}

export default Content