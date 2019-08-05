import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import LoginForm from '../molecules/LoginForm';
import styled from 'styled-components';

const Holder = styled.main`
  position: relative;
  width: 100vw;
  padding: 2rem;
  > :first-child { margin-top: 0; }
  > :last-child { margin-bottom: 0; }
  @media ( ${props => props.theme.breakpoints.md} ) {
    width: calc(100vw - ${props => props.theme.sidebarWidth});
  }
`;

class Content extends Component {

  render() {
    return (
      <Holder>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={LoginForm}/>
      </Holder>
    )
  }
}

export default Content