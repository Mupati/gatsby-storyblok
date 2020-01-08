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
  margin: 2em 10%;
`
