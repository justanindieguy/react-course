import axios from 'axios';
import { API_KEY } from './secrets/unsplashApiKey';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: { Authorization: `Client-ID ${API_KEY}` },
    params: { query: term },
  });

  return response.data.results;
};

export default searchImages;
