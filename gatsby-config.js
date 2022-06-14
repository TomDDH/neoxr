/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "NeoXR website",
    description: "I teach JavaScript, React, GraphQL and Gatsby",
    author: "NeoXR tech & Media LLC",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration:2000
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NeoXR`,
        short_name: `NeoXR`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "neoxr.net",
        acl: null,
      },
    }
  ],
}
