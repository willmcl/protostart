import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.footer`
  border-top: 1px solid ${props => props.theme.colours.grey};
  padding: 1rem;
  display: flex;
  p { margin: 0; }
`;

class Footer extends Component {
  render() {
    return (
      <Holder>
        <p>
          <small>&copy; 2019 </small>
        </p>
      </Holder>
    )
  }
}

export default Footer;