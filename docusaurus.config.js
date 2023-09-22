// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Svantle Learn',
  tagline: 'Learning is fun!',
  favicon: 'img/svantle-logo-transparent-shadow.png',

  url: 'https://learn.svantle.com',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/svantle/learn/tree/main/',
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
        image: 'img/svantle-full-no-com.png',
        navbar: {
          title: 'Svantle Learn',
          logo: {
            alt: 'the Official Svantle Logo',
            src: 'img/svantle-logo-transparent-shadow.png',
            href: 'https://svantle.com/',
            target: '_self',
          },
          items: [
            {
              to: '/catalog',
              label: 'Catalog',
              position: 'left',
            },
            {
              to: '/about',
              label: 'About',
              position: 'left',
            },
            {
              to: '/donate',
              label: 'Donate',
              position: 'left',
            },
            {
              type: 'localeDropdown',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'light',
          links: [
            {
              title: 'Resources',
              items: [
                {
                  label: 'Catalog',
                  href: '/catalog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/svantle',
                },
                {
                  label: 'Contact Us',
                  href: 'mailto:support@svantle.com',
                  target: '_self',
                }
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Forums',
                  href: 'https://forums.svantle.com/',
                },
                {
                  label: 'Discord',
                  href: 'https://discord.gg/engeMgrjFf',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/svantledotcom',
                },
              ],
            },
            {
              title: 'Legal',
              items: [
                {
                  label: 'Terms of Service',
                  href: '/tos',
                },
                {
                  label: 'Privacy Policy',
                  href: '/privacy',
                },
                {
                  label: 'Cookie Policy',
                  href: '/cookies',
                }
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Svantle, LLC. Built with Docusaurus. Content licensed under AGPLv3.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;