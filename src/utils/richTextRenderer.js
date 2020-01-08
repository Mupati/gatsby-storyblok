import React from "react"
const StoryblokClient = require("storyblok-js-client")

let Storyblok = new StoryblokClient({
  accessToken: "YOUR_TOKEN",
})

const RichTextContent = ({ data }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: Storyblok.richTextResolver.render(data),
      }}
    />
  )
}
export default RichTextContent
