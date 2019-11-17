import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export default PageMenu;