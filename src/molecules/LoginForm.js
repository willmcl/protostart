import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

const LoginSchema = Yup.object().shape( {
  email: Yup.string()
  .email( 'Invalid email' )
  .required( 'Required' ),
} );

class LoginForm extends Component {

  login = ( values ) => {
    this.props.dispatch( {
      type: 'LOGIN',
      email: values.email
    } );
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={LoginSchema}
          onSubmit={( values, actions ) => {
            setTimeout( () => {
              this.login( values );
              actions.setSubmitting( false );
            }, 100 );
          }}
          render={props => (
            <Form>
              <Field type="email" name="email"/>
              <ErrorMessage className="errorMsg" name="email" component="div"/>
              <Field type="password" name="password"/>
              <ErrorMessage className="errorMsg" name="password" component="div"/>
              <button type="submit">Submit</button>
            </Form>
          )}
        />
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    userEmail: state.userEmail
  };
}

export default connect( mapStateToProps )( LoginForm );