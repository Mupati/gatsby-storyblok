import React from "react"
import styled from "styled-components"

const Category = ({ blok }) => {
  console.log(blok)
  return (
    <CategoryItem>
      <CategoryLink>
        <CategoryImage></CategoryImage>
        {blok.name}
        <br />
        {blok.link.cached_url}
        <br />
        {blok.image}
      </CategoryLink>
    </CategoryItem>
  )
}

export default Category

const CategoryItem = styled.li`
  position: relative;
  list-style: none;
  margin-bottom: 10px;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
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

const CategoryLink = styled.a`
  font-size: 2.5rem;
  font-weight: 700;
  z-index: 2;
  color: #06c4d1;
`
const CategoryImage = styled.img`
  height: 128px;
  margin-bottom: 20px;
  z-index: 2;
`
