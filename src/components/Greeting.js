import React, { Component } from 'react';
import { connect } from 'react-redux';

class Greeting extends Component {
    render() {
        const isLoggedIn = this.props.loggedIn;
        if (isLoggedIn) {
            return (
                <p>Welcome back user!</p>
            )
        } else {
            return (
                <p>Nice to meet you guest!</p>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    };
}

export default connect(mapStateToProps)(Greeting);