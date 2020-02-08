import React from "react"
import SbEditable from "storyblok-react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { fluidImage } from "../../utils/gatsbyImageTransform"

const Hero = props => {
  let fluidData = fluidImage(props.blok.banner)
  return (
    <SbEditable content={props.blok}>
      <Wrapper fluid={fluidData}>
        <Overlay />
        <Heading>{props.blok.heading}</Heading>
        {props.path === "index" && props.blok.description && (
          <Description>{props.blok.description}</Description>
        )}
      </Wrapper>
    </SbEditable>
  )
}

export default Hero

const Wrapper = styled(props => <BackgroundImage {...props} />)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50vh;
  margin-bottom: 2em;
  }
`

const Heading = styled.h2`
  z-index: 2;
  color: #06c4d1;
  font-size: 5em;
  @media (max-width: 768px) {
    font-size: 2.3em;
  }
`

const Description = styled.p`
  color: #fff;
  z-index: 2;
  font: 400 25px/33px "Montserrat";
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(19, 17, 16);
  opacity: 0.7;
`
