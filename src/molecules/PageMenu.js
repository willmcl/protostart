import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Menu = styled.nav`
  padding-bottom: 2rem;
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
    > :first-child { margin-top: 0; }
    > :last-child { margin-bottom: 0; }
  }
`;

class PageMenu extends Component {
  handleClick = () => {
    this.props.dispatch({
      type: 'TOGGLE_MENU',
      open: !this.props.menuOpen
    });
  };

  render() {
    return (
      <Menu>
        <ul>
          <li><Link to="/" onClick={this.handleClick}>Home</Link></li>
          <li><Link to="/dashboard" onClick={this.handleClick}>Dashboard</Link></li>
        </ul>
      </Menu>
    )
  }
}

function mapStateToProps( state ) {
  return {
    menuOpen: state.menu.open
  };
}

export default connect( mapStateToProps )( PageMenu );