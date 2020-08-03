import React, { useState, useEffect } from "react";

import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

import Api from "../../services/api";

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
    <PageDefault paddingAll={0}>
      <BannerMain />

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
