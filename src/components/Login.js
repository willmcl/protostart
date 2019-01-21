// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values.email, values.password);
                this.props.loginHandler( values.email );
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage className="errorMsg" name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage className="errorMsg" name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Login;