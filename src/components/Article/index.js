import React from "react"
import styled from "styled-components"
import RichText from "../../utils/richTextRenderer"

const Article = props => {
  return (
    <Wrapper>
      <RichText data={props.blok.body} />
    </Wrapper>
  )
}

export default Article

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  margin: 2em 15% 5em;
`
