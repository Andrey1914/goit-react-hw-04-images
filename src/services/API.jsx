import axios from 'axios';

async function getImages(request, page) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '28251298-ba7573d558705083124fcae2c';
  const options = new URLSearchParams({
    key: API_KEY,
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  });

  const { data } = await axios.get(`${URL}?${options}`);
  return data;
}

export default getImages;
