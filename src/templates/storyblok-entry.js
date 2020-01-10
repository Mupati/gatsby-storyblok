import React, { Component } from "react"
import Components from "../utils/components.js"
import styled from "styled-components"

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

    const globalNavi = Object.assign({}, props.pageContext.globalNavi)
    story.content = JSON.parse(story.content)
    globalNavi.content = JSON.parse(globalNavi.content)

    return { story, globalNavi }
  }

  constructor(props) {
    super(props)
    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    let content = this.state.story.content
    let globalNavi = this.state.globalNavi.content
    let currentPath = this.state.story.slug
    let dateCreated = this.state.story.created_at

    console.log(currentPath)

    return (
      <>
        <TheHeader blok={globalNavi.header} />
        <Main>
          {React.createElement(Components(content.component), {
            key: content._uid,
            blok: content,
            path: currentPath,
            dateCreated: dateCreated,
          })}
        </Main>
        <TheFooter blok={globalNavi.footer} />
      </>
    )
  }
}

export default StoryblokEntry

const Main = styled.main`
  min-height: 100vh;
  overflow-y: auto;
`
