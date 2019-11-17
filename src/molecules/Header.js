import React, { Component } from 'react';
import styled from 'styled-components';
import PageMenu from './PageMenu';
import Logo from '../atoms/Logo';

const Holder = styled.header`
  border-bottom: 1px solid ${props => props.theme.colours.grey};
  padding: 1rem 2rem;
  p { margin: 0; }
`;

class Header extends Component {
  render() {
    return (
      <Holder>
        <Logo/>
        <p><small>Header</small></p>
        <PageMenu/>
      </Holder>
    )
  }
}

export default Header;