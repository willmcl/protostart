import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Sidebar from './organisms/Sidebar';
import Content from './organisms/Content';
import Header from "./molecules/Header";
import Footer from "./molecules/Footer";


// Create a reducer function to tell Redux what our state should look like.
const initialState = {
    loggedIn: false,
    userEmail: ''
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'LOGOUT':
            return {
                loggedIn: false,
                userEmail: 'none'
            };
        case 'LOGIN':
            return {
                loggedIn: true,
                userEmail: action.email
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
                            <Header/>
                            <Sidebar/>
                            <Content/>
                            <Footer/>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
