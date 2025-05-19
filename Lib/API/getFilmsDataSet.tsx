import { BASE_URL } from "@/API/endpoint";

export default async function getFilmsDataSet({
  slugs,
}: {
  slugs: string;
}): Promise<FilmApiDataResponse[]> {
  const response = await fetch(`${BASE_URL}/api/data-films?filters[slug]=${slugs}&populate[BannerImages][fields][0]=name&populate[BannerImages][fields][1]=url&populate[Review][populate]=true&populate[Awards][populate]=true&populate[Trailer_realeases][populate][HostImage][fields][0]=name&populate[Trailer_realeases][populate][HostImage][fields][1]=url&populate[Songs][populate][ThumbImage][fields][0]=name&populate[Songs][populate][ThumbImage][fields][1]=url&populate[MovieVideo][populate][Image][fields][0]=name&populate[MovieVideo][populate][Image][fields][1]=url&populate[LeadCast][populate][Image][fields][0]=name&populate[LeadCast][populate][Image][fields][1]=url&populate[LeadCrew][populate][Image][fields][0]=name&populate[LeadCrew][populate][Image][fields][1]=url&populate[Gallery][fields][0]=name&populate[Gallery][fields][1]=url&populate[ImgThumb][fields][0]=name&populate[ImgThumb][fields][1]=url`);
  const data = await response.json();

  return data.data;
}
