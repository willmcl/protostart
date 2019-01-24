import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogoutLink extends Component {

    logout = () => {
        this.props.dispatch({ type: 'LOGOUT' });
    };

    render() {
        return (
            <button className="LogoutLink" onClick={this.logout}>Logout</button>
        )

    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    };
}

export default connect(mapStateToProps)(LogoutLink);