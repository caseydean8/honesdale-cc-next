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

  const CheckboxConditionalRender = (props: {
    errors: string;
    values: string;
    className: string;
  }) => {
    if (!props.errors && props.values) {
      return (
        <Checkbox name='cellCheck' className={props.className}>
          you can text me at this number
        </Checkbox>
      );
    }
  };

  const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Please enter a first name'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Please enter a last name'),
    email: Yup.string().email('Please enter a valid email').required('Please enter an email'),
    phone: Yup.string().matches(phoneRegExp, 'Please enter a valid phone number'),
    message: Yup.string().required('Please enter a message'),
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

    // alert(JSON.stringify(values, null, 2));

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
          {({ isValid, isSubmitting, dirty, errors, touched, values }) => (
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
                <CheckboxConditionalRender
                  className='d-md-none'
                  values={values.phone}
                  errors={errors.phone}
                />
                <SelectInput name='attends' label='Do you attend?'>
                  <option value='default'>please select</option>
                  <option value='yes'>yes</option>
                  <option value='planning to'>I'm planning to</option>
                  <option value='no'>no</option>
                </SelectInput>
                <CheckboxConditionalRender
                  className='d-none d-md-block'
                  values={values.phone}
                  errors={errors.phone}
                />
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
              <h4 className='mt-5'>or feel free to call us</h4>
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
