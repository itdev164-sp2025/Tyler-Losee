/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `The Great Gatsby`,
    author: `Tyler Losee`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: "Tyler Losee",
      company: "Blogs Inc.",
      address: "PO Box 1234"
    }
  },
    plugins: [
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `YOUR_SPACE_ID`,
          accessToken: `YOUR_ACCESS_TOKEN`,
        },
      },
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/gatsby-icon.png`,
        },
      },
    ],
  }
  