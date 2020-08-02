import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

// import { Container } from './styles';

function NewCategory() {
  const [categories, setCategories] = useState([]);
  const [newcategory, setNewCategory] = useState({
    name: '',
    description: '',
    color: '#000000',
  });
  const { name, description, color } = newcategory;

  const handleValueChange = ({ target: { name, value } }) => {
    setNewCategory({ ...newcategory, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setCategories([...categories, newcategory]);
    setNewCategory({
      name: '',
      description: '',
      color: '#000000',
    });
  };

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

        {/* <div>
          <label htmlFor="name">Nome da categoria: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleValueChange}
          />
        </div> */}

        {/* <div>
          <label htmlFor="description">Descrição: </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleValueChange}
          />
        </div>

        <div>
          <label htmlFor="color">Descrição: </label>
          <input
            type="color"
            id="color"
            name="color"
            value={color}
            onChange={handleValueChange}
          />
        </div> */}

        <button type="submit">Cadastar</button>
      </form>

      <ul>
        {categories.map(({ name, description, color }, index) => (
          <li key={`${name}${index}`}>
            <p>{name}</p>
            <p>{description}</p>
            <p>{color}</p>
          </li>
        ))}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default NewCategory;
