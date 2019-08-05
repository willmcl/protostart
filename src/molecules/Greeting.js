import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogoutLink from '../atoms/LogoutLink';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Holder = styled.div`
  p { margin: 0; }
`;

class Greeting extends Component {
  render() {
    const isLoggedIn = this.props.loggedIn;
    if ( isLoggedIn ) {
      return (
        <Holder>
          <p>
            <small>{this.props.userEmail} |
              <LogoutLink/>
            </small>
          </p>
        </Holder>
      )
    } else {
      return (
        <Holder>
          <Link className="button" to="/login">Log in</Link>
        </Holder>
      )
    }

  }
}

function mapStateToProps( state ) {
  return {
    loggedIn: state.login.loggedIn,
    userEmail: state.login.userEmail,
  };
}

export default connect( mapStateToProps )( Greeting );