import React, { Component } from 'react';
import { FieldArray } from 'formik';
import Checkbox from './Checkbox';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 500px;
`;

class CheckboxList extends Component {

  constructor( props ) {
    super( props );
    this.onCheckboxChange = this.onCheckboxChange.bind( this );
  }

  onCheckboxChange( e, arrayHelpers ) {
    if ( e.target.checked ) arrayHelpers.push( e.target.id );
    else {
      const idx = this.props.value.indexOf( e.target.id );
      arrayHelpers.replace( idx, undefined );
    }
  }

  render() {
    return (
      <FieldArray
        name={this.props.name}
        render={arrayHelpers => (
          <List>
            {this.props.array.map( option => (
              <Checkbox
                key={option.id}
                name={this.props.name}
                id={option.id}
                label={option.label}
                checked={this.props.value.includes( option.id )}
                helpers={arrayHelpers}
                onCheckboxChange={this.onCheckboxChange}/>
            ) )}
          </List>
        )}
      />
    )
  }
}

export default CheckboxList;