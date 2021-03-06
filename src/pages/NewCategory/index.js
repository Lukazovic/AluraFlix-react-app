import React, { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import Api from "../../services/api";

import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";
import Button from "../../components/Button";

function NewCategory() {
  const initialValues = {
    name: "",
    description: "",
    color: "#000000",
  };
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    value: newCategory,
    handleChange,
    resetValues: resetCategoryValues,
  } = useForm(initialValues);
  const { name, description, color } = newCategory;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetCategoryValues();
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await Api.getCategories();
      setCategories([...response]);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {name}</h1>

      <form action="submit" onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={color}
          onChange={handleChange}
        />

        <Button type="submit">Cadastar</Button>
      </form>

      <h1>Categorias</h1>

      <ul>
        {loading ? (
          <h3>Loading</h3>
        ) : (
          categories.map(({ id, title, color }) => (
            <li key={id}>
              <strong>Título: {title}</strong>
              <p>Cor: {color}</p>
            </li>
          ))
        )}
      </ul>
    </PageDefault>
  );
}

export default NewCategory;
