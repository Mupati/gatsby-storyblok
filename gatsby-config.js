require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Kofi Mupati Blog - DevCodes`,
    description: `A Blog by Kofi Obrasi Ocran where I share my thoughts on several topics`,
    author: `kofi mupati`,
    siteUrl: `https://www.devcodes.co`,
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
        accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        resolveRelations: [
          "article.author",
          "page.author",
          "article.category",
          "page.category",
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-prismjs`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131436918-3",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.devcodes.co",
        sitemap: "https://www.devcodes.co/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `KOFI OBRASI OCRAN`,
    //     short_name: `KOFI MUPATI`,
    //     start_url: `/`,
    //     background_color: `#0e2d30`,
    //     theme_color: `#0e2d30`,
    //     display: `standalone`,
    //     icon: `src/images/kofi-ocran.jpg`,  This path is relative to the root of the site.
    //   },
    // },
    // `gatsby-plugin-offline`,
  ],
}
