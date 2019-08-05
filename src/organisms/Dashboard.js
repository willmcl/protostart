import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../molecules/LoginForm';
import DashboardContent from './DashboardContent';

class Dashboard extends Component {
  render() {
    if ( this.props.loggedIn ) {
      return (
        <DashboardContent/>
      )
    } else {
      return (
        <LoginForm/>
      )
    }

  }
}

function mapStateToProps( state ) {
  return {
    loggedIn: state.login.loggedIn,
  };
}

export default connect( mapStateToProps )( Dashboard );