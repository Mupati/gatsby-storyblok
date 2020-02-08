import React from "react"
import styled from "styled-components"
import RichText from "../../utils/richTextRenderer"
import { DiscussionEmbed } from "disqus-react"

const Article = props => {
  const disqusShortname = "devcodes"
  const disqusConfig = {
    url: `https://www.devcodes.co/${props.blok.meta[0].link.cached_url}`,
    identifier: props.blok._uid,
    title: props.blok.meta[0].title,
  }
  return (
    <Wrapper>
      <ArticleWrapper>
        <RichText data={props.blok.body} />
      </ArticleWrapper>
      <StyledDisqus>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </StyledDisqus>
    </Wrapper>
  )
}

export default Article
const Wrapper = styled.section`
  font: 400 18px/33px "Montserrat";
  margin: 2em 15% 5em;
  @media (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
  }
  @media (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
`

const ArticleWrapper = styled.article`
  display: flex;
  justify-content: center;
`
const StyledDisqus = styled.div`
  margin-top: 2em;
`
