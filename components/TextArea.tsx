import { useField } from 'formik';

const TextArea = ({ ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props.name);

  return (
    <div className='mb-3'>
      <textarea className='form-control' {...field} {...props}></textarea>
      {meta.touched && meta.error ? <div className='error-msg'>{meta.error}</div> : null}
    </div>
  );
};

export default TextArea;
