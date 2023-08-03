import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/TextInput';
import TextArea from '@/components/TextArea';

const SignupForm = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        message: Yup.string().required('Required'),
        // acceptedTerms: Yup.boolean()
        //   .required('Required')
        //   .oneOf([true], 'You must accept the terms and conditions.'),
        // jobType: Yup.string()
        //   .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
        //   .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className='contact page-marker'>
        <Form>
          <TextInput name='firstName' type='text' placeholder='First Name' />
          <TextInput name='lastName' type='text' placeholder='Last Name' />
          <TextInput name='email' type='text' placeholder='Email' />
          <TextInput name='phone' type='text' placeholder='Phone' />
          <TextArea name='message' placeholder='Message' />
          {/* <SelectInput label='Job Type' name='jobType'>
            <option value=''>Select a job type</option>
            <option value='designer'>Designer</option>
            <option value='development'>Developer</option>
            <option value='product'>Product Manager</option>
            <option value='other'>Other</option>
          </SelectInput>
          <Checkbox name='acceptedTerms'>I accept the terms and conditions</Checkbox> */}
          <div className='d-grid d-sm-block'>
            <button className='btn btn-info' type='submit'>
              submit
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default SignupForm;
