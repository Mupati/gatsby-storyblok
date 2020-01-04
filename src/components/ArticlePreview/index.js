import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import transformImage from "../../utils/imageTransform"

const ArticlePreview = props => {
  const bgImg = transformImage(props.blok.image)
  return (
    <Wrapper>
      <PreviewContent>
        <Heading>{props.blok.title}</Heading>
        <Excerpt>{props.blok.excerpt}</Excerpt>
        <ContentBottom>
          <Author></Author>
          <PublishedDate>{props.blok.date}</PublishedDate>
        </ContentBottom>
      </PreviewContent>
      <PreviewImage image={bgImg}></PreviewImage>
    </Wrapper>
  )
}

export default ArticlePreview

const Wrapper = styled.li`
  display: flex;
  padding: 2em;
  border: 1px solid #06c4d1;
  width: 100%
  &:hover {
    border-left: 0.5em solid #06c4d1;
    cursor: pointer;
  }
`
const PreviewContent = styled.div`
  width: 50%;
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
  background-color: #06c4d1;
  background-size: cover;
  background-position: center center;
  height: 220px;
  width: 50%;
  margin-left: 2em;
`
