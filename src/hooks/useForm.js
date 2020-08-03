import { useState } from "react";

const useForm = (initialValues) => {
  const [value, setValue] = useState(initialValues);

  const handleChange = ({ target }) => {
    setValue({ ...value, [target.name]: target.value });
  };

  const resetValues = () => {
    setValue(initialValues);
  };

  return {
    value,
    setValue,
    handleChange,
    resetValues,
  };
};

export default useForm;
