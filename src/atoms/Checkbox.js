import React, { Component } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

const Holder = styled.li`
  display: block;
  position: relative;
  min-height: 2rem;
  line-height: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  user-select: none;
  // Hide the browser's default radio button
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    width: 2rem;
    border: 1px solid;
    border-radius: 2px;
    background-color: ${props => props.theme.colours.white};
  }
  label {
    display: block;
    line-height: 2rem;
    margin: 0;
    position: relative;
    padding-left: 4rem;
  }
  // On hover
  &:hover > input ~ .checkmark {
    border-color: ${props => props.theme.colours.focus};
  }
  input:checked ~ .checkmark {
    display: block;
    background-color: ${props => props.theme.colours.link};
    border-color: ${props => props.theme.colours.link};
    background-image: url('assets/icons/tick.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1rem;
  }
`;

class Checkbox extends Component {

  constructor( props ) {
    super( props );
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( e, arrayHelpers ) {
    this.props.onCheckboxChange( e, arrayHelpers );
  }

  render() {
    return (
      <Holder key={this.props.name}>
        <Field
          type="checkbox"
          name={this.props.name}
          id={this.props.id}
          value={this.props.id}
          checked={this.props.checked}
          onChange={( e ) => this.handleChange( e, this.props.helpers )}/>
        <div className="checkmark"/>
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </Holder>
    )
  }
}

export default Checkbox;