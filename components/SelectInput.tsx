import { useField } from 'formik';

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div className='mb-3'>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select className='form-control' {...field} {...props} />

      {meta.touched && meta.error ? <div className='error-msg'>{meta.error}</div> : null}
    </div>
  );
};

export default SelectInput;
