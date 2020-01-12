import React from "react"
import styled from "styled-components"

const Heading = ({ blok }) => <Wrapper>{blok.heading}</Wrapper>

export default Heading

const Wrapper = styled.h2`
  text-align: center;
  padding-top: 0.5em;
  margin-top: 0.5em;
  color: #333;
  text-transform: uppercase;
`
