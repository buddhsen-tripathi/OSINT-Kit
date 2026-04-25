import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://buddhsen-tripathi.github.io',
  base: '/OSINT-Kit',
  integrations: [
    starlight({
      title: 'OSINT Kit',
      description: 'A comprehensive toolkit for Open Source Intelligence (OSINT) tasks',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Buddhsen-tripathi/OSINT-Kit',
        },
      ],
      sidebar: [],
    }),
  ],
});
