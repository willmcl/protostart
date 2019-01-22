import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutLink from './LogOutLink';
import { Link } from "react-router-dom";

class Greeting extends Component {
    render() {
        const isLoggedIn = this.props.loggedIn;
        if (isLoggedIn) {
            return (
                <div className="Greeting">
                    <p>Welcome back {this.props.userEmail}</p>
                    <LogOutLink/>
                </div>
            )
        } else {
            return (
                <div className="Greeting">
                    <Link className="button" to="/login">Log in</Link>
                </div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn,
        userEmail: state.userEmail,
    };
}

export default connect(mapStateToProps)(Greeting);