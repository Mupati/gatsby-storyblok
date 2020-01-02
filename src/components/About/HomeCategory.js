import React from "react"
import SbEditable from "storyblok-react"
import styled from "styled-components"

import Components from "../../utils/components"

const HomeCategory = props => {
  return (
    <SbEditable content={props.blok}>
      <Wrapper>
        {props.blok.body.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok,
          })
        )}
      </Wrapper>
    </SbEditable>
  )
}

export default HomeCategory

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  margin: 5em 5%;
  @media (max-width: 768px) {
    margin: 2em 0;
  }
`
