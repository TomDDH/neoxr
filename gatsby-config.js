/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NeoXR`,
        short_name: `NeoXR`,
        icon: `src/images/icon.png`
      },
    },
  ],
}
