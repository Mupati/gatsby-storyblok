import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import humburgerIcon from "../../images/burger.svg"
import closeIcon from "../../images/close.svg"

const Header = props => {
  const [isMenuOpen, openMenu] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        openMenu(false)
      }
    }
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [isMenuOpen])

  return (
    <Wrapper>
      <DesktopNav>
        {props.blok[0].nav_brand.map(brand => (
          <NavBrand to={brand.url.cached_url} key={brand._uid}>
            {brand.name}
          </NavBrand>
        ))}
        <DesktopNavList>
          {props.blok[0].nav_item[0].link.map(link => (
            <DesktopNavItem key={link._uid}>
              <DesktopNavLink to={`/${link.url.cached_url}`}>
                {link.name}
              </DesktopNavLink>
            </DesktopNavItem>
          ))}
          <Humburger onClick={() => openMenu(!isMenuOpen)}>
            <img src={isMenuOpen ? closeIcon : humburgerIcon} alt="MENU" />
          </Humburger>
        </DesktopNavList>
      </DesktopNav>
      {isMenuOpen && (
        <MobileNav>
          <MobileNavList>
            {props.blok[0].nav_item[0].link.map(link => (
              <MobileNavItem key={link._uid}>
                <MobileNavLink to={`/${link.url.cached_url}`}>
                  {link.name}
                </MobileNavLink>
              </MobileNavItem>
            ))}
          </MobileNavList>
        </MobileNav>
      )}
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
  display: flex;
  height: 100%;
`
const DesktopNavList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
  margin-right: 3em;
`

const DesktopNavItem = styled.li`
  margin: 0 1rem;
  padding: 0.3rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: none;
  }
`

const DesktopNavLink = styled(props => <Link {...props} />)`
  display: block;
  text-decoration: none;
  color: #fff;
  &:hover,
  &:active {
    color: #06c4d1;
  }
`
const Humburger = styled.button`
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: block;
  }
`
const MobileNav = styled.nav`
  display: none;
  height: 100vh;
  background: #022d30;
  @media (max-width: 768px) {
    display: block;
  }
`
const MobileNavList = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const MobileNavItem = styled.li`
  display: flex;
  text-transform: uppercase;
  margin-bottom: 3.5em;
`
const MobileNavLink = styled(props => <Link {...props} />)`
  display: block;
  text-decoration: none;
  color: #fff;
  &:hover,
  &:active {
    color: #06c4d1;
  }
`
