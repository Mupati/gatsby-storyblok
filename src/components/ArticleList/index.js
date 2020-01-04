import React from "react"
import SbEditable from "storyblok-react"
import styled from "styled-components"

import Components from "../../utils/components"

const ArticleList = props => {
  return (
    <SbEditable content={props.blok}>
      <Wrapper>
        {props.blok.content.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok,
          })
        )}
      </Wrapper>
    </SbEditable>
  )
}

export default ArticleList

const Wrapper = styled.ul`
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 5em;
`
