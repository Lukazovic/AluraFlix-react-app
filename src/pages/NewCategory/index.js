import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";

// import { Container } from './styles';

const BASE_URL = "http://localhost:3333";

function NewCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newcategory, setNewCategory] = useState({
    name: "",
    description: "",
    color: "#000000",
  });
  const { name, description, color } = newcategory;

  const handleValueChange = ({ target: { name, value } }) => {
    setNewCategory({ ...newcategory, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCategories([...categories, newcategory]);
    setNewCategory({
      name: "",
      description: "",
      color: "#000000",
    });
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/categories`)
      .then((response) => response.json())
      .then((body) => {
        setCategories([...body]);
        setLoading(false);
        console.log(body);
      });
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
          onChange={handleValueChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={description}
          onChange={handleValueChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={color}
          onChange={handleValueChange}
        />

        <button type="submit">Cadastar</button>
      </form>

      <h1>Categorias</h1>

      <ul>
        {loading ? (
          <h3>Loading</h3>
        ) : (
          categories.map(({ id, title, color }) => (
            <li key={id}>
              <p>{title}</p>
              <p>{color}</p>
            </li>
          ))
        )}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default NewCategory;
