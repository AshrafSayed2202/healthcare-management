import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addPatient } from '../../state/patientsSlice';

const PatientSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    age: Yup.number().required('Age is required'),
    gender: Yup.string().required('Gender is required')
});

const PatientManagement = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Patient Registration</h2>
            <Formik
                initialValues={{ name: '', age: '', gender: '' }}
                validationSchema={PatientSchema}
                onSubmit={values => {
                    dispatch(addPatient(values));
                }}
            >
                <Form>
                    <div>
                        <label>Name</label>
                        <Field name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <label>Age</label>
                        <Field name="age" />
                        <ErrorMessage name="age" component="div" />
                    </div>
                    <div>
                        <label>Gender</label>
                        <Field name="gender" />
                        <ErrorMessage name="gender" component="div" />
                    </div>
                    <button type="submit">Register Patient</button>
                </Form>
            </Formik>
        </div>
    );
};

export default PatientManagement;
