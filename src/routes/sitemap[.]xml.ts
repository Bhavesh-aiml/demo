import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const paths = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/founder", priority: "0.8" },
  { path: "/services", priority: "0.9" },
  { path: "/projects", priority: "0.9" },
  { path: "/industries", priority: "0.7" },
  { path: "/gallery", priority: "0.6" },
  { path: "/blog", priority: "0.6" },
  { path: "/careers", priority: "0.6" },
  { path: "/contact", priority: "0.8" },
  { path: "/privacy", priority: "0.3" },
  { path: "/terms", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
