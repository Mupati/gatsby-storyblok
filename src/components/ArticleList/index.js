import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SbEditable from "storyblok-react"
import styled from "styled-components"

import Components from "../../utils/components"

const ArticleList = props => {
  console.log(props)
  let homePageArticles = (
    <Wrapper>
      {props.blok.content.map(blok =>
        React.createElement(Components(blok.component), {
          key: blok._uid,
          blok: { ...blok },
        })
      )}
    </Wrapper>
  )

  let data = useStaticQuery(graphql`
    {
      allStoryblokEntry(
        filter: {
          full_slug: { regex: "/crosslines|wordsmith|software/" }
          is_startpage: { eq: false }
        }
      ) {
        edges {
          node {
            uuid
            full_slug
            first_published_at
            content
          }
        }
      }
    }
  `)

  let { edges } = data.allStoryblokEntry

  // information used to render the article previews
  let meta = []
  // dates the articles were created
  let dates = []

  edges.forEach(entry => {
    let expression = new RegExp(props.path, "i")
    if (expression.test(entry.node.full_slug)) {
      meta.push(JSON.parse(entry.node.content).body[1].meta)
      dates.push(entry.node.first_published_at)
    }
  })

  let categoryArticles = (
    <Wrapper>
      {meta.length > 0 &&
        meta.map((blok, index) =>
          React.createElement(Components(blok[0].component), {
            key: blok[0]._uid,
            blok: { ...blok[0], date: dates[index] },
          })
        )}
    </Wrapper>
  )

  return (
    <SbEditable content={props.blok}>
      {props.path === "index" ? homePageArticles : categoryArticles}
    </SbEditable>
  )
}

export default ArticleList

const Wrapper = styled.ul`
  margin: 0 25% 10em;
  @media (max-width: 992px) {
    margin: 0 10% 10em;
  }
  @media (max-width: 768px) {
    margin: 0 5% 10em;
  }
`
