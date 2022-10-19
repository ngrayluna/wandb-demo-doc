// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'reference-guide/intro',
            position: 'left',
            label: 'Developer Guide',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'api',
            label: 'API',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Developer Guide',
                to: '/docs/reference-guide/intro',
              },
              {
                label: 'API',
                to: '/docs/api/intro'
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Forum',
                href: 'https://community.wandb.ai/?_gl=1*rhy5cu*_ga*MjQzNTM2NTgwLjE2NTQwMTQ1NzA.*_ga_JH1SJHJQXJ*MTY2NjIxNjI5My4yMTYuMS4xNjY2MjE2MzA0LjQ5LjAuMA..',
              },
              {
                label: 'Blog',
                href: 'https://wandb.ai/fully-connected',
              },
            ],
          },
          {
            title: 'Media',
            items: [
              {
                label: 'Podcast',
                href: 'https://wandb.ai/fully-connected/podcast',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/weights_biases?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/WeightsBiases',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
