import React, { useState, useEffect } from 'react';
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
    title: '',
    url: '',
    categoryTitle: '',
  };
  const {
    value: newCategory,
    handleChange,
    resetValues: resetCategoryValues,
  } = useForm(initialValues);
  const { title, url, categoryTitle } = newCategory;

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.getCategories();
      setCategories([...response]);
    };
    loadData();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const saveVideo = async () => {
      const category = categories.find(
        (oldCategory) => oldCategory.title === categoryTitle
      );
      if (!category) {
        alert('Categoria Indexistente!');
      } else {
        await Api.addNewVideo({ title, url, categoryId: category.id });
        alert('O video foi adicionado com sucesso!');
        resetCategoryValues();
        history.push();
      }
    };
    saveVideo();
  };

  return (
    <PageDefault>
      <h1>Cadastrar novo video</h1>

      <form action="submit" onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="title"
          value={title}
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

        <FormField
          label="Categoria"
          type="text"
          name="categoryTitle"
          value={categoryTitle}
          onChange={handleChange}
          suggestions={categories.map(
            (existentCategory) => existentCategory.title
          )}
          required
        />

        <Button type="submit">Cadastar</Button>
      </form>

      <Link to="/new/category">Cadastrar nova Categoria</Link>
    </PageDefault>
  );
}

export default NewVideo;
