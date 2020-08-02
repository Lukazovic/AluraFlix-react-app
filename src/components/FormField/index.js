import React from "react";
import PropTypes from "prop-types";

// import { Container } from './styles';

function FormField({ label, type, name, value, onChange }) {
  return (
    <fieldset>
      <label htmlFor={`id_${name}`}>{label}:</label>
      {type !== "textarea" ? (
        <input
          type={type}
          id={`id_${name}`}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          name={name}
          id={`id_${name}`}
          cols="30"
          rows="3"
          onChange={onChange}
        />
      )}
    </fieldset>
  );
}

FormField.defautProps = {
  type: "text",
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
