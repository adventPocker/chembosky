import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://chembosky.com",
      lastModified: new Date(),
    },
    {
      url: "https://chembosky.com/about",
      lastModified: new Date(),
    },

    {
      url: "https://chembosky.com/filimography",
      lastModified: new Date(),
    },
    {
      url: "https://chembosky.com/about/chemban_vinod",
      lastModified: new Date(),
    },
  ];
}
