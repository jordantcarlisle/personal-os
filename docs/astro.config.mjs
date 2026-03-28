import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://jordantcarlisle.github.io',
  base: '/personal-os',
  integrations: [
    starlight({
      title: 'Personal OS',
      head: [
        {
          tag: 'script',
          content: `
            // Default to light mode ("dawn in a field lab") when no preference stored
            (function() {
              const stored = localStorage.getItem('starlight-theme');
              if (!stored) {
                document.documentElement.dataset.theme = 'light';
              }
            })();
          `,
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://jordantcarlisle.github.io/personal-os/og-image.svg',
          },
        },
      ],
      customCss: [
        '@fontsource/inter/400.css',
        '@fontsource/inter/600.css',
        '@fontsource/inter/800.css',
        '@fontsource/jetbrains-mono/400.css',
        '@fontsource/jetbrains-mono/600.css',
        '@fontsource/instrument-serif/400.css',
        '@fontsource/instrument-serif/400-italic.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        { label: 'Getting Started', autogenerate: { directory: 'getting-started' } },
        { label: 'Core Framework', autogenerate: { directory: 'core-framework' } },
        { label: 'Agent Architecture', autogenerate: { directory: 'agents' } },
        { label: 'Commands Reference', autogenerate: { directory: 'commands' } },
        { label: 'Modules', autogenerate: { directory: 'modules' } },
        { label: 'Integrations', autogenerate: { directory: 'integrations' } },
        { label: 'Making It Yours', autogenerate: { directory: 'making-it-yours' } },
      ],
    }),
  ],
});
