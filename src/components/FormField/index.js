import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input } from './styles';

function FormField({
  label,
  type,
  name,
  value,
  onChange,
  required,
  suggestions,
}) {
  const hasSuggestions = suggestions.length > 0;
  return (
    <Container>
      <Label htmlFor={`id_${name}`}>
        <Input
          as={type === 'textarea' ? 'textarea' : 'input'}
          type={type}
          id={`id_${name}`}
          name={name}
          value={value}
          list={hasSuggestions ? `suggestionFor_id_${name}` : undefined}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          onChange={onChange}
          required={required}
        />
        <Label.Text>{label}:</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_id_${name}`}>
            {suggestions.map((suggestion) => (
              <option key={suggestion} value={suggestion}>
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </Container>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  required: false,
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
