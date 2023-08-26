import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/TextInput';
import TextArea from '@/components/TextArea';
import * as emailjs from '@emailjs/browser';
import Checkbox from '@/components/Checkbox';
import Head from 'next/head';
import Balancer from 'react-wrap-balancer';

interface Values {
  firstName: string;
  lastName?: string;
  email: string;
  anotherPerson?: boolean;
  message: string;
}

const PrayerRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Please enter a first name'),
    lastName: Yup.string().max(20, 'Must be 20 characters or less'),
    email: Yup.string().email('Please enter a valid email').required('Please enter an email'),
    message: Yup.string().required('Please enter a message'),
  });

  function handleFormSubmit(values: Values) {
    setLoading(true);
    const { firstName, lastName, email, anotherPerson, message } = values;

    const templateParams = {
      firstName,
      lastName,
      email,
      anotherPerson,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_PRAYREQ_ID,
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
          <h2 className='contact-header contact'>Thanks,</h2>
          <h4 className='contact'>We'll add your prayer request asap</h4>
        </>
      ) : (
        <Formik
          enableReinitialize
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            anotherPerson: false,
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => handleFormSubmit(values)}
        >
          {({ isValid, isSubmitting, dirty }) => (
            <>
              <Head>
                <title>Prayer Request</title>
                <meta name='description' content='Form for leaving a prayer request' />
              </Head>
              <h4 className='pb-3'>
                <Balancer>Request prayers for yourself or someone you know</Balancer>
              </h4>
              <Form className='row g-3'>
                <TextInput name='firstName' type='text' placeholder='First Name' />
                <TextInput name='lastName' type='text' placeholder='Last Name' />
                <TextInput name='email' type='text' placeholder='Email' />
                <Checkbox name='anotherPerson'>this prayer request is for someone else</Checkbox>
                <TextArea name='message' placeholder='Prayer Request:' />
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
              <p className='pt-5'>
                <Balancer>
                  Rejoice always, pray without ceasing, give thanks in all circumstances; for this
                  is the will of God in Christ Jesus for you.
                </Balancer>
              </p>
              <p>1 Thessalonians 5:16-18</p>
            </>
          )}
        </Formik>
      )}
    </div>
  );
};

export default PrayerRequestForm;
