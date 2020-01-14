import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { fixedImage } from "../../utils/gatsbyImageTransform"

const Category = ({ blok }) => {
  let fixedData = fixedImage(blok.icon, {
    height: 128,
    width: 128,
  })
  return (
    <CategoryItem>
      <CategoryLink to={`/${blok.link.cached_url}`}>
        <CategoryImage
          fixed={fixedData}
          alt={blok.name.toLowerCase()}
        ></CategoryImage>
        <CategoryName>{blok.name}</CategoryName>
      </CategoryLink>
    </CategoryItem>
  )
}

export default Category

const CategoryItem = styled.li`
  position: relative;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20rem;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  transition: 500ms ease-in-out;
  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    opacity: 0.65;
  }
`
const CategoryName = styled.span`
  text-transform: uppercase;
  font: 700 32px/39px "Montserrat";
`
const CategoryLink = styled(props => <Link {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;
  z-index: 2;
  color: #06c4d1;
  text-decoration: none;
`

const CategoryImage = styled(props => <Img {...props} />)`
  margin-bottom: 20px;
  z-index: 2;
`
