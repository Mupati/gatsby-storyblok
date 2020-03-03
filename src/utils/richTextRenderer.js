import React from "react"
import styled from "styled-components"
const StoryblokClient = require("storyblok-js-client")

let Storyblok = new StoryblokClient({
  accessToken: "YOUR_TOKEN",
})

const RichTextContent = ({ data }) => {
  return (
    <Wrapper
      dangerouslySetInnerHTML={{
        __html: Storyblok.richTextResolver.render(data),
      }}
    />
  )
}
export default RichTextContent

const Wrapper = styled.div`
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
