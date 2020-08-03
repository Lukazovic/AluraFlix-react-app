import React from "react";
import PropTypes from "prop-types";

import { Container, Label, Input } from "./styles";

function FormField({ label, type, name, value, onChange, required }) {
  return (
    <Container>
      <Label htmlFor={`id_${name}`}>
        <Input
          as={type === "textarea" ? "textarea" : "input"}
          type={type}
          id={`id_${name}`}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
        <Label.Text>{label}:</Label.Text>
      </Label>
    </Container>
  );
}

FormField.defautProps = {
  type: "text",
  value: "",
  onChange: () => {},
  required: false,
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default FormField;
