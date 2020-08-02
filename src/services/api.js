const BASE_URL = "http://localhost:3333";

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
}

export default new Api();
