import React from "react"
import SbEditable from "storyblok-react"
import styled from "styled-components"

import transformImage from "../../utils/imageTransform"

const Hero = props => {
  const bgImage = transformImage(props.blok.banner)
  return (
    <SbEditable content={props.blok}>
      <Wrapper bgImg={bgImage}>
        <Heading>{props.blok.heading}</Heading>
        {props.blok.description && (
          <Description>{props.blok.description}</Description>
        )}
      </Wrapper>
    </SbEditable>
  )
}

export default Hero

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50vh;
  margin-bottom: 2em;
  background-image: url(${props => props.bgImg});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.65;
  }
`

const Heading = styled.h1`
  z-index: 2;
  color: #06c4d1;
  font-size: 5em;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`

const Description = styled.p`
  color: #fff;
  z-index: 2;
`