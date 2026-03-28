import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://jordantcarlisle.github.io',
  base: '/personal-os',

  integrations: [
    starlight({
      title: 'Personal OS',
      description: 'An AI-powered personal operating system. GTD, PARA, and Atomic Habits — integrated with your AI coding agent.',
      defaultColorScheme: 'light',

      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/jordantcarlisle/personal-os' },
      ],

      customCss: [
        '@fontsource/inter/400.css',
        '@fontsource/inter/500.css',
        '@fontsource/inter/600.css',
        '@fontsource/inter/700.css',
        '@fontsource/jetbrains-mono/400.css',
        '@fontsource/jetbrains-mono/700.css',
        './src/styles/custom.css',
      ],

      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'What Is This?', slug: 'getting-started/what-is-this' },
            { label: 'Choose Your AI Tool', slug: 'getting-started/choose-your-tool' },
            { label: 'Install & Onboard', slug: 'getting-started/install-and-onboard' },
            { label: 'Your First Day', slug: 'getting-started/your-first-day' },
          ],
        },
        {
          label: 'Core Framework',
          items: [
            { label: 'The PARA Method', slug: 'core-framework/para-method' },
            { label: 'Getting Things Done', slug: 'core-framework/getting-things-done' },
            { label: 'Identity & Habits', slug: 'core-framework/identity-and-habits' },
            { label: 'The Cockpit', slug: 'core-framework/the-cockpit' },
            { label: 'The Daily Loop', slug: 'core-framework/the-daily-loop' },
            { label: 'Weekly & Quarterly Reviews', slug: 'core-framework/weekly-and-quarterly-reviews' },
          ],
        },
        {
          label: 'Agent Architecture',
          items: [
            { label: 'How It Works', slug: 'agents/how-it-works' },
            { label: 'Core Team', slug: 'agents/core-team' },
            { label: 'Specialist Agents', slug: 'agents/specialist-agents' },
            { label: 'Building Your Own', slug: 'agents/building-your-own' },
            { label: 'Platform Adapters', slug: 'agents/platform-adapters' },
          ],
        },
        {
          label: 'Commands Reference',
          items: [
            { label: 'Core Commands', slug: 'commands/core-commands' },
            { label: 'Module Commands', slug: 'commands/module-commands' },
          ],
        },
        {
          label: 'Modules',
          items: [
            { label: 'Health Data Integration', slug: 'modules/health-data' },
            { label: 'Learning System', slug: 'modules/learning-system' },
            { label: 'Relationship Management', slug: 'modules/relationship-management' },
            { label: 'Financial Organization', slug: 'modules/financial-organization' },
            { label: 'Brand & Content', slug: 'modules/brand-and-content' },
            { label: 'Career & Role Management', slug: 'modules/career-and-role-management' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { label: 'Overview', slug: 'integrations/overview' },
          ],
        },
        {
          label: 'Making It Yours',
          items: [
            { label: 'The Onboarding Questionnaire', slug: 'making-it-yours/onboarding-questionnaire' },
            { label: 'Personal Context', slug: 'making-it-yours/personal-context' },
            { label: 'Growing the System', slug: 'making-it-yours/growing-the-system' },
          ],
        },
      ],
    }),
  ],
});
