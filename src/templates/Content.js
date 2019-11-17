import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Footer from '../molecules/Footer';

const Outer = styled.div`
  position: relative;
  margin: 2rem;
`;
const Holder = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  > :first-child { margin-top: 0; > :first-child { margin-top: 0; } }
  > :last-child { margin-bottom: 0; > :last-child { margin-bottom: 0; } }
  &.Content-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  &.Content-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 200ms linear;
  }
  &.Content-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.Content-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 200ms linear;
  }
`;

const routes = [
  { path: '/', Component: Home },
  { path: '/dashboard', Component: Dashboard },
];

class Content extends Component {

  render() {
    return (
      <Outer>
        {routes.map( ( { path, Component } ) => (
          <Route key={path} exact path={path}>
            {( { match } ) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="Content"
                unmountOnExit
              >
                <Holder>
                  <Component/>
                  <Footer/>
                </Holder>
              </CSSTransition>
            )}
          </Route>
        ) )}
      </Outer>
    )
  }
}

export default Content