import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/TextInput';
import TextArea from '@/components/TextArea';
import * as emailjs from '@emailjs/browser';
import Checkbox from '@/components/Checkbox';
import SelectInput from '@/components/SelectInput';
import Head from 'next/head';
import Balancer from 'react-wrap-balancer';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cellCheck: boolean;
  attends: string;
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
    const { firstName, lastName, email, phone, cellCheck, attends, message } = values;

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      cellCheck,
      attends,
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
            cellCheck: false,
            attends: 'unanswered',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => handleFormSubmit(values)}
        >
          {({ isValid, isSubmitting, dirty }) => (
            <>
              <Head>
                <title>Contact</title>
                <meta
                  name='description'
                  content='Contact us by filling out a form with your name, email, and a brief message or reach out to us by phone and we will get back to you asap'
                />
              </Head>
              <h2 className='contact-header'>Have A Question?</h2>
              <h4 className='pb-3'>
                <Balancer>Leave us a message and we'll get back to you soon</Balancer>
              </h4>
              <Form className='row g-3'>
                <TextInput name='firstName' type='text' placeholder='First Name' />
                <TextInput name='lastName' type='text' placeholder='Last Name' />
                <TextInput name='email' type='text' placeholder='Email' />
                <TextInput name='phone' type='text' placeholder='Phone' />
                <Checkbox name='cellCheck' className='d-md-none'>
                  you can text me at this number
                </Checkbox>
                <SelectInput name='attends' label='do you attend?'>
                  <option value='default'>please select</option>
                  <option value='yes'>yes</option>
                  <option value='planning to'>I'm planning to</option>
                  <option value='no'>no</option>
                </SelectInput>
                <Checkbox name='cellCheck' className='d-none d-md-block'>
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
              <h4 className='mt-5'>. . . or feel free to call us</h4>

              <button className='btn btn-info btn-lg mt-2'>
                <a href='tel:5702533267' className='black-link'>
                  570 253-3267
                </a>
              </button>
            </>
          )}
        </Formik>
      )}
    </div>
  );
};

export default SignupForm;
