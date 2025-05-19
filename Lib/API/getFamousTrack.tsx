import { BASE_URL } from '@/API/endpoint';
import axios,{ AxiosResponse }  from 'axios';

export default async function getFamousTrack(): Promise<FamousTrackList> {
  try {
    const response: AxiosResponse<FamousTrackList> = await axios.get(`${BASE_URL}/api/famous-tracks/?populate[Image][fields][0]=name&populate[Image][fields][1]=url&populate[Songs][populate][ThumbImage][fields][0]=name&populate[Songs][populate][ThumbImage][fields][1]=url`);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}