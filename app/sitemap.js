// export default function sitemap() {
//     return [
//       {
//         url: 'https://omnisphere.vercel.app',
//         lastModified: new Date(),
//         changeFrequency: 'weekly',
//         priority: 1,
//       },
//       {
//         url: 'https://omnisphere.vercel.app/about',
//         lastModified: new Date(),
//         changeFrequency: 'weekly',
//         priority: 0.8,
//       },
//       {
//         url: 'https://omnisphere.vercel.app/categories',
//         lastModified: new Date(),
//         changeFrequency: 'weekly',
//         priority: 1,
//       },
//       {
//         url: 'https://omnisphere.vercel.app/tags',
//         lastModified: new Date(),
//         changeFrequency: 'weekly',
//         priority: 1,
//       },
//     ]
//   }

import { getAllPosts } from "@/lib/posts"; // Fetch blog slugs dynamically

export default async function sitemap() {
  const posts = await getAllPosts(); // Ensure this function returns an array of slugs

  const baseUrls = [
    {
      url: "https://omnisphere.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://omnisphere.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://omnisphere.vercel.app/categories",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://omnisphere.vercel.app/tags",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Generate URLs for all blog posts dynamically
  const blogUrls = posts.map((post) => ({
    url: `https://omnisphere.vercel.app/${post.slug}`, // Blog posts follow this pattern
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...baseUrls, ...blogUrls]; // Combine static and dynamic URLs
}
