import React, { Component } from 'react';
import PageMenu from '../molecules/PageMenu.js';
import styled from 'styled-components';

const Holder = styled.div`
  width: ${props => props.theme.sidebarWidth};
  padding: 2rem;
  border-right: 1px solid ${props => props.theme.colours.grey};
`;

class Sidebar extends Component {
  render() {
    return (
      <Holder>
        <PageMenu/>
      </Holder>
    )
  }
}

export default Sidebar