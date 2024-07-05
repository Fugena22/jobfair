import { site } from "@/config/site";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["/", "/dang-ky", "/cam-on", "/chinh-sach-bao-mat"];

  return staticRoutes.map((r) => ({
    url: `${site.baseUrl}${r}`,
    lastModified: new Date(),
  }));
}
