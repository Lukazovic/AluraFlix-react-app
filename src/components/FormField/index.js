import React from 'react';

// import { Container } from './styles';

function FormField({ label, type, name, value, onChange }) {
  return (
    <fieldset>
      <label htmlFor={name}>{label}: </label>
      {type !== 'textarea' ? (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          name={name}
          id={name}
          cols="30"
          rows="3"
          onChange={onChange}
        />
      )}
    </fieldset>
  );
}

export default FormField;
