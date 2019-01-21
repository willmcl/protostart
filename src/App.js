import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userEmail: '',
        };
        this.handleLoginChange = this.handleLoginChange.bind( this );
    }

    handleLoginChange(loggedIn, email) {
        if( loggedIn ) {
            this.setState( {
                loggedIn: true,
            } )
        } else {
            this.setState( {
                loggedIn: false,
            } )
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div className="AppContainer">
                        <Sidebar loggedIn={this.state.loggedIn}/>
                        <Content onLoginChange={this.handleLoginChange} loggedIn={this.state.loggedIn}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
