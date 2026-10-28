import type { MetadataRoute } from "next";
const BASE_URL = "https://maajabuhairsalon.co.za";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/about", "/gallery", "/contact"];
  return routes.map((route, index) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}
