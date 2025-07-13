import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
<<<<<<< HEAD
      url: '/manual-validate',
=======
      url: '/implementation-methods',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: '/implementation-methods/reactHook-validate',
>>>>>>> 4605fda (fix: added new pages)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
<<<<<<< HEAD
      url: '/reactHook-validate',
=======
      url: '/implementation-methods/manual-validate',
>>>>>>> 4605fda (fix: added new pages)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
