import { useField } from 'formik';

const SelectInput = ({ children, label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div className='form-floating col-md-6 mb-3'>
      <select className='form-select' id='floatingSelect' {...field} {...props}>
        {children}
      </select>

      <label htmlFor='floatingSelect'>{label}</label>
      {meta.touched && meta.error ? <div className='error-msg'>{meta.error}</div> : null}
    </div>
  );
};

export default SelectInput;
