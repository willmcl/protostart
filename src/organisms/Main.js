import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Holder = styled.main`
  width: 100%;
  overflow-x: hidden;
`;

const Inner = styled.div`
  display: flex;
  width: calc(100vw + ${props => props.theme.sidebarWidth});
  margin-left: ${props => props.menuOpen ? 0 : `-${props.theme.sidebarWidth}`};
  transition: margin-left 0.25s ease-in-out;
  @media (${props => props.theme.breakpoints.md}) {
    margin-left: 0;
    width: 100vw;
  }
`;

class Main extends Component {
  render() {
    return (
      <Holder>
        <Inner menuOpen={this.props.menuOpen}>
          <Sidebar/>
          <Content/>
        </Inner>
      </Holder>
    )
  }
}

function mapStateToProps( state ) {
  return {
    menuOpen: state.menu.open
  };
}

export default connect( mapStateToProps )( Main );