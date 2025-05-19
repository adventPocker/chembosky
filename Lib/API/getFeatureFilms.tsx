import { BASE_URL } from '@/API/endpoint';
import axios,{ AxiosResponse }  from 'axios';

export default async function getFeatureFilms(): Promise<FeaturedFilms> {
  try {
    const response: AxiosResponse<FeaturedFilms> = await axios.get(`${BASE_URL}/api/featured-film`);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}