import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

// import { Container } from './styles';

function NewVideo() {
  return (
    <PageDefault>
      <h1>Novo video</h1>

      <Link to="/new/category">Cadastrar nova categoria</Link>
    </PageDefault>
  );
}

export default NewVideo;
