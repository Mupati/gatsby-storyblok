const previewToken =
  process.env.STORYBLOK_PREVIEW_TOKEN || "kay8DtnXZrchZAdy8NGirgtt"
module.exports = {
  siteMetadata: {
    title: `Kofi Mupati Blog - DevCodes`,
    description: `A Blog by Kofi Obrasi Ocran where I share my thoughts on several topics`,
    author: `kofi mupati`,
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
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: previewToken,
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devcodes`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
