import { BASE_URL } from "@/API/endpoint";

export default async function getUpcomingData({
  slugs,
}: {
  slugs: string;
}): Promise<UpcomingFilmList[]> {
  const response = await fetch(`${BASE_URL}/api/upcoming-films?filters[slug]=${slugs}&populate[Image][populate]=true&populate[Image][fields][0]=name&populate[Image][fields][1]=url&populate[ImgThumb][populate]=true&populate[ImgThumb][fields][0]=name&populate[ImgThumb][fields][1]=url&populate[LeadCrew][populate][Image][populate]=true&populate[LeadCrew][populate][Image][fields][0]=name&populate[LeadCrew][populate][Image][fields][1]=url&populate[LeadCast][populate][Image][populate]=true&populate[LeadCast][populate][Image][fields][0]=name&populate[LeadCast][populate][Image][fields][1]=url`);
  const data = await response.json();

  return data.data;
}
