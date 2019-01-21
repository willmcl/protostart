import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';


// Create a reducer function to tell Redux what our state should look like.
const initialState = {
    loggedIn: false
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'LOGOUT':
            return {
                loggedIn: false
            };
        case 'LOGIN':
            return {
                loggedIn: true
            };
        default:
            return state;
    }
}


// Use createStore function to create a store, and passed it the reducer.
export const store = createStore(reducer);

class App extends Component {

    render() {
        return (

            // Wrap our whole app in the Provider component that comes with react-redux,
            // and pass it our store as a prop.
            <Provider store={store}>
                <div className="App">
                    <Router>
                        <div className="AppContainer">
                            <Sidebar/>
                            <Content/>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
