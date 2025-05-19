import { BASE_URL } from '@/API/endpoint';
import axios,{ AxiosResponse }  from 'axios';

export default async function getFamousVideos(): Promise<FamousVideoList> {
  try {
    const response: AxiosResponse<FamousVideoList> = await axios.get(`${BASE_URL}/api/famous-videos/?populate[Image][fields][0]=name&populate[Image][fields][1]=url&populate[Videos][populate][Image][fields][0]=name&populate[Videos][populate][Image][fields][1]=url`);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}