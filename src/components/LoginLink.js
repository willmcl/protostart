import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LoginLink extends Component {
    render() {
        const isLoggedIn = this.props.loggedIn;
        if (isLoggedIn) {
            return (
                <li><Link to="/logout">Logout</Link></li>
            )
        } else {
            return (
                <li><Link to="/login">Login</Link></li>
            )
        }

    }
}

export default LoginLink