import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Api from '../../services/api';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function NewVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const initialValues = {
    name: '',
    url: '',
  };
  const {
    value: newCategory,
    handleChange,
    resetValues: resetCategoryValues,
  } = useForm(initialValues);
  const { name, url } = newCategory;

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.getCategories();
      setCategories([...response]);
    };
    loadData();
  }, []);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();

    const saveVideo = async () => {
      await Api.addNewVideo(newCategory);
      alert('O video foi adicionado com sucesso!');
      resetCategoryValues();
      history.push();
    };
    saveVideo();
  }, []);

  return (
    <PageDefault>
      <h1>Cadastrar novo video</h1>

      <form action="submit" onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />

        <FormField
          label="url"
          type="url"
          name="url"
          value={url}
          onChange={handleChange}
          required
        />

        <div>
          <label htmlFor="category"></label>
          <select name="select" id="category" required>
            <option value="" defaultValue>
              Selecione uma Categoria
            </option>
            {categories.map(({ id, title }) => (
              <option key={id} value={id}>
                {title}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit">Cadastar</Button>
      </form>

      <Link to="/new/category">Cadastrar nova Categoria</Link>
    </PageDefault>
  );
}

export default NewVideo;
