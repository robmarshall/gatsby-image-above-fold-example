module.exports = {
  siteMetadata: {
    title: `Gatsby Image Example`,
    description: `Example of Gatsby Images above the fold, and how they effect Google Page insight score.`,
    author: `@robertmars`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
