import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/TextInput';
import TextArea from '@/components/TextArea';
import * as emailjs from '@emailjs/browser';
import Checkbox from '@/components/Checkbox';
import SelectInput from '@/components/SelectInput';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const SignupForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    message: Yup.string().required('Required'),
  });

  function handleFormSubmit(values: Values) {
    setLoading(true);
    const { firstName, lastName, email, phone, message } = values;

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_FORMIK_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result);
          setSubmitted(true);
          setLoading(false);
        },
        error => console.log(error)
      );
  }

  return (
    <div className='contact page-marker'>
      {submitted ? (
        <>
          <h2 className='contact-header contact'>Thanks!</h2>
          <h4 className='contact'>We'll be in touch with you asap</h4>
        </>
      ) : (
        <Formik
          enableReinitialize
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => handleFormSubmit(values)}
        >
          {({ isValid, isSubmitting, dirty }) => (
            <Form className='row g-2'>
              <TextInput name='firstName' type='text' placeholder='First Name' />
              <TextInput name='lastName' type='text' placeholder='Last Name' />
              <TextInput name='email' type='text' placeholder='Email' />
              <TextInput name='phone' type='text' placeholder='Phone' />
              <Checkbox name='cell-check' className='d-md-none'>
                you can text me at this number
              </Checkbox>
              <SelectInput name='select' label='do you attend?' defaultValue={'default'}>
                <option value='default'>please select</option>
                <option value='yes'>yes</option>
                <option value='planning to'>I'm planning to</option>
                <option value='no'>no</option>
              </SelectInput>
              <Checkbox name='cell-check' className='d-none d-md-block'>
                you can text me at this number
              </Checkbox>
              <TextArea name='message' placeholder='Message' />
              <div className='d-grid d-sm-block'>
                {loading ? (
                  <button className='btn btn-info' type='button'>
                    <span className='spinner-border spinner-border-sm' aria-hidden='true'></span>
                    <span role='status'> sending . . .</span>
                  </button>
                ) : (
                  <button
                    className='btn btn-info'
                    type='submit'
                    disabled={isSubmitting || !dirty || !isValid}
                  >
                    submit
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default SignupForm;
