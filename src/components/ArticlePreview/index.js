import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import transformImage from "../../utils/imageTransform"

const ArticlePreview = props => {
  const bgImg = transformImage(props.blok.image)
  return (
    <Wrapper>
      <ArticleLink to={`/${props.blok.link.cached_url}`}>
        <PreviewContent>
          <Heading>{props.blok.title}</Heading>
          <Excerpt>{props.blok.excerpt}</Excerpt>
          <ContentBottom>
            <Author></Author>
            <PublishedDate>{props.blok.date}</PublishedDate>
          </ContentBottom>
        </PreviewContent>
        <PreviewImage image={bgImg}></PreviewImage>
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
const Excerpt = styled.p``

const ContentBottom = styled.div`
  display: flex;
  margin-top: auto;
`
const Author = styled.div``
const PublishedDate = styled.span``

const PreviewImage = styled.div`
  background-image: url(${props => props.image});
  background-color: rgba(6, 196, 209, 0.3);
  background-size: cover;
  background-position: center center;
  height: 220px;
  width: 50%;
  margin-left: 2em;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`
