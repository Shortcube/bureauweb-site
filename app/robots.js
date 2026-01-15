// app/robots.js

export default function robots() {
  return {
    rules: [
      // Règles générales
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },

      // Bots agressifs — crawl-delay
      {
        userAgent: "AhrefsBot",
        crawlDelay: 10,
      },
      {
        userAgent: "SemrushBot",
        crawlDelay: 10,
      },
    ],

    sitemap: "https://bureauweb.ca/sitemap.xml",
  }
}
