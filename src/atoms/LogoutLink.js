import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  margin-left: 1rem;
  margin-right: auto;
  padding: 0;
  border: none;
  text-decoration: underline;
  ${props => props.theme.typeStyles( -1 )};
`;

class LogoutLink extends Component {

  logout = () => {
    this.props.dispatch( { type: 'LOGOUT' } );
  };

  render() {
    return (
      <Button onClick={this.logout}>Logout</Button>
    )
  }
}

function mapStateToProps( state ) {
  return {
    loggedIn: state.login.loggedIn
  };
}

export default connect( mapStateToProps )( LogoutLink );