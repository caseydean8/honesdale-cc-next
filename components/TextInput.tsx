import { useField } from 'formik';

const TextInput = ({ ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props.name);

  return (
    <div className='form-floating mb-3'>
      <input className='form-control' {...field} {...props} />
      <label htmlFor={props.id || props.name}>{props.placeholder}</label>
      {meta.touched && meta.error ? <div className='error-msg'>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
