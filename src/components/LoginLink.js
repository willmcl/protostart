import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class LoginLink extends Component {

    logout = () => {
        this.props.dispatch({ type: 'LOGOUT' });
    };

    login = () => {
        this.props.dispatch({ type: 'LOGIN' });
    };

    render() {
        const isLoggedIn = this.props.loggedIn;
        console.log(isLoggedIn);
        if (isLoggedIn) {
            return (
                <li onClick={this.logout}>Logout</li>
            )
        } else {
            return (
                <li onClick={this.login}>Login</li>
            )
        }

    }
}

// Write a mapStateToProps function that does what the name says:
// transforms the Redux state into an object containing props.
function mapStateToProps(state) {
    // The object you return from mapStateToProps gets fed into your component as props.
    // The example below will pass state.loggedIn as the value of the loggedIn prop
    return {
        loggedIn: state.loggedIn
    };
}


// Connect the Redux store to our component with the connect function from react-redux,
// using the mapStateToProps function to configure how the connection works.
export default connect(mapStateToProps)(LoginLink);