import React, { Component } from 'react';
import Logo from '../atoms/Logo';
import IconMenu from '../atoms/IconMenu';
import Greeting from './Greeting';
import styled from 'styled-components';

const Holder = styled.header`
  border-bottom: 1px solid ${props => props.theme.colours.grey};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`;

class Header extends Component {
  render() {
    return (
      <Holder>
        <IconMenu/>
        <Logo/>
        <Greeting/>
      </Holder>
    )
  }
}

export default Header;