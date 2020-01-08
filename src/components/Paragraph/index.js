import React from "react"
import styled from "styled-components"

const Paragraph = ({ blok }) => <Wrapper>{blok.paragraph}</Wrapper>

export default Paragraph

const Wrapper = styled.p`
  text-align: justify;
  padding: 1em 0;
  margin: 1em 0;
`
