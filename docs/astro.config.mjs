import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://jordantcarlisle.github.io',
  base: '/personal-os',
  integrations: [
    starlight({
      title: 'Personal OS',
      customCss: [
        '@fontsource/inter/400.css',
        '@fontsource/jetbrains-mono/400.css',
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
