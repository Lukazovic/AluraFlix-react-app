import React from 'react';

import PageDefault from '../../components/PageDefault';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
        }
      />

      {dadosIniciais.categorias.map((category, index) => (
        <Carousel
          key={index}
          ignoreFirstVideo={index === 0 ? true : false}
          category={category}
        />
      ))}
    </PageDefault>
  );
}

export default Home;
