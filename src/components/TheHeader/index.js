import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = props => {
  return (
    <Wrapper>
      <DesktopNav>
        {props.blok[0].nav_brand.map(brand => (
          <NavBrand to={brand.url.url} key={brand._uid}>
            {brand.name}
          </NavBrand>
        ))}
        <NavList>
          {props.blok[0].nav_item[0].link.map(link => (
            <NavItem key={link._uid}>
              <NavLink to="/about">{link.name}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </DesktopNav>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #022d30;
  padding: 1rem 2rem;
  z-index: 3;
`

const NavBrand = styled(props => <Link {...props} />)`
  color: #06c4d1;
  font-size: 30px;
  font-weight: bold;
`

const DesktopNav = styled.nav`
  height: 100%;
  display: flex;
`
const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
  margin-right: 3em;
`

const NavItem = styled.li`
  margin: 0 1rem;
  padding: 0.3rem;
  text-transform: uppercase;
`

const NavLink = styled(props => <Link {...props} />)`
  display: block;
  text-decoration: none;
  color: #fff;
  &:hover,
  &:active {
    color: #06c4d1;
  }
`
