import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';


// Use Yup for validation
// https://jaredpalmer.com/formik/docs/guides/validation#validationschema
const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

class Login extends Component {

    login = () => {
        this.props.dispatch({ type: 'LOGIN' });
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
                    onSubmit={(values, { setSubmitting }) => {
                        this.login();
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email"/>
                            <ErrorMessage className="errorMsg" name="email" component="div"/>
                            <Field type="password" name="password"/>
                            <ErrorMessage className="errorMsg" name="password" component="div"/>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

// Write a mapStateToProps function that does what the name says:
// transforms the Redux state into an object containing props.
function mapStateToProps(state) {
    // The object you return from mapStateToProps gets fed into your component as props.
    // The example below will pass state.loggedIn as the value of the loggedIn prop
    return {
        loggedIn: state.loggedIn
    };
}


// Connect the Redux store to our component with the connect function from react-redux,
// using the mapStateToProps function to configure how the connection works.
export default connect(mapStateToProps)(Login);