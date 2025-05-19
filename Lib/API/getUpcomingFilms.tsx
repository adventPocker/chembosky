import { BASE_URL } from '@/API/endpoint';
import axios,{ AxiosResponse }  from 'axios';

export default async function getUpcomingFilms(): Promise<UpcomingFilmList[]> {
  try {
    const response: AxiosResponse<UpcomingFilmList[]> = await axios.get(`${BASE_URL}/api/upcoming-films?populate=*`);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}