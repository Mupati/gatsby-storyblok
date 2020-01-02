import React, { Component } from "react"
import Components from "../utils/components.js"

import TheHeader from "../components/TheHeader"
import TheFooter from "../components/TheFooter"

class StoryblokEntry extends Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }
  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)

    return { story }
  }

  constructor(props) {
    super(props)

    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    let content = this.state.story.content

    return (
      <>
        <TheHeader />
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
        <TheFooter />
      </>
    )
  }
}

export default StoryblokEntry
