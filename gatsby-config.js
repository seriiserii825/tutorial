/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "Gatsby tutorial",
    description: "Some random descriptioin",
    author: "@johndoe",
    data: ["item 1", "item 2"],
    person: { name: "Peter", age: 32 },
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2lucm7vs4bzo`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `7MvQAT4vZkjedxw3Ix50YQF6z1MroFe-MhKtZ8Jgkz8`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
