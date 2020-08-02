import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

// import { Container } from './styles';

function NewCategory() {
  return (
    <PageDefault>
      <h1>Cadastar nova categoria</h1>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default NewCategory;
