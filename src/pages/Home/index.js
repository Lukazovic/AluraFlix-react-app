import React, { useState, useEffect } from "react";

import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

import Api from "../../services/api";
import dadosIniciais from "../../data/dados_iniciais.json";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await Api.getCategoriesWithVideos();
      setCategories(response);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <PageDefault>
        <h1>Loading</h1>
      </PageDefault>
    );
  }

  return (
    <PageDefault>
      <BannerMain
        videoTitle={categories[0].videos[1].title}
        url={categories[0].videos[1].url}
        videoDescription={
          "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        }
      />

      {categories.map((category, index) => (
        <Carousel
          key={category.id}
          ignoreFirstVideo={index === 0 ? true : false}
          category={category}
        />
      ))}
    </PageDefault>
  );
}

export default Home;
