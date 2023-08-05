import { useField } from 'formik';

const Checkbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently from other input types: select and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField(props.name);

  return (
    <div className={`form-check col-md-6 ${props.className}`}>
      <input className='form-check-input float-none' type='checkbox' {...field} />
      <label className='from-check-label text-start ps-2'>{children}</label>
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  );
};

export default Checkbox;
