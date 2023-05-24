import axios from 'axios';
const IMAGES_PER_PAGE = 12;
const URL = 'https://pixabay.com/api/';

const fetchImages = async (query, page) => {
  const options = {
    params: {
      key: '28748876-67ab38db9ddd85c8483365c4b',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: IMAGES_PER_PAGE,
    },
  };
  const response = await axios.get(URL, options);
  const array = response.data.hits;
  return array.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};

export default fetchImages;