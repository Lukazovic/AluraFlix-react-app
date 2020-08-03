const BASE_URL = 'http://localhost:3333';

class Api {
  getCategories() {
    const response = fetch(`${BASE_URL}/categories`)
      .then((response) => response.json())
      .then((body) => body);
    return response;
  }

  getVideos() {
    const response = fetch(`${BASE_URL}/videos`)
      .then((response) => response.json())
      .then((body) => body);
    return response;
  }

  getCategoriesWithVideos() {
    const response = fetch(`${BASE_URL}/categories?_embed=videos`)
      .then((response) => response.json())
      .then((body) => body);
    return response;
  }

  addNewCategory() {}

  async addNewVideo(data) {
    return fetch(`${BASE_URL}/videos`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(async (response) => {
      if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
      }

      alert('Aconteceu um erro na criação do video');
    });
  }
}

export default new Api();
