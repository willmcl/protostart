import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogoutLink from '../atoms/LogoutLink';
import { Link } from "react-router-dom";

class Greeting extends Component {
    render() {
        const isLoggedIn = this.props.loggedIn;
        if (isLoggedIn) {
            return (
                <div className="Greeting">
                    <p>
                        <small>{this.props.userEmail} |
                            <LogoutLink/>
                        </small>
                    </p>
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