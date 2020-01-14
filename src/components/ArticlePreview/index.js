import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { fluidImage } from "../../utils/gatsbyImageTransform"
import formatName from "../../utils/formatAuthorName"
import { getDateInEnglish } from "../../utils/formatDate"

const ArticlePreview = props => {
  let authorName = formatName(props.blok.author.cached_url)
  let publishedDate = getDateInEnglish(props.blok.date)
  let fluidData = fluidImage(props.blok.image, {
    maxWidth: 1200,
  })
  return (
    <Wrapper>
      <ArticleLink to={`/${props.blok.link.cached_rl}`}>
        <PreviewContent>
          <Heading>{props.blok.title}</Heading>
          <Excerpt>{props.blok.excerpt}</Excerpt>
          <ContentBottom>
            <Author>By: {authorName}</Author>
            <PublishedDate>{publishedDate}</PublishedDate>
          </ContentBottom>
        </PreviewContent>
        <PreviewImage fluid={fluidData}></PreviewImage>
      </ArticleLink>
    </Wrapper>
  )
}

export default ArticlePreview

const Wrapper = styled.li`
  display: flex;
`
const ArticleLink = styled(props => <Link {...props} />)`
  display: flex;
  width: 100%;
  padding: 1.5em;
  border: 1px solid #c9d3e2;
  color: #333;
  transition: 500ms ease-in-out;
  &:hover {
    border-left: 0.5em solid #06c4d1;
    cursor: pointer;
    transform: translateX(5px);
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
const PreviewContent = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Heading = styled.h2`
  font-size: 24px;
`
const Excerpt = styled.p`
  text-align: justify;
  font: 400 14px/18px "Montserrat";
`

const ContentBottom = styled.div`
  display: flex;
  margin-top: auto;
`
const Author = styled.span`
  margin-right: auto;
`
const PublishedDate = styled.em``

const PreviewImage = styled(BackgroundImage)`
  background-color: rgba(6, 196, 209, 0.3);
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 50%;
  margin-left: 2em;
  @media (max-width: 768px) {
    height: 220px;
    width: 100%;
    margin: 0;
  }
`
