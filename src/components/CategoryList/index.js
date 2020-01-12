import React from "react"
import SbEditable from "storyblok-react"
import styled from "styled-components"

import Components from "../../utils/components"

const CategoryList = props => {
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

export default CategoryList

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
  margin: 5em 5%;
  @media (max-width: 768px) {
    margin: 2em 10px;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`
