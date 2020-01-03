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

// grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  align-items: flex-start;
  grid-gap: 3rem;
  margin: 5em 5%;
  @media (max-width: 768px) {
    margin: 2em 0;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  }
`
