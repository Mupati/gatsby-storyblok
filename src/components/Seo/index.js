import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import transformImage from "../../utils/imageTransform"
import favicon from "../../images/favicon.ico"
import cardImage from "../../images/kofi-ocran-seo-image.png"

function SEO({ title, description, lang, meta, image }) {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           author
  //         }
  //       }
  //     }
  //   `
  // )

  const seoImage = cardImage || transformImage(image, "300x200")

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
          name: `description`,
          content: description,
        },
        {
          name: `image`,
          content: seoImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          name: `ogg:image`,
          content: seoImage,
        },
        {
          property: "og:url",
          content: "https://www.devcodes.co",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: seoImage,
        },
        {
          name: `twitter:creator`,
          content: `kofi_mupati`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
      link={[
        {
          rel: "icon",
          type: "image/x-icon",
          href: favicon,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
