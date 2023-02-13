import type { GatsbyConfig } from "gatsby";

if (process.env.NODE_ENV != 'production')
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
  });

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'duc0905 website',
    description: 'Duc Le\'s personal website',
    siteUrl: 'https://duc0905.github.io',
    image: 'icon.png'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    "gatsby-theme-material-ui",
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        prismPreset: 'night-owl',
        preset: '@theme-ui/preset-funk',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_API_KEY,
        databaseId: process.env.NOTION_CONTENT_DB,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
  ]
};

export default config;
