import React from "react"
import styled from "styled-components"

const Footer = props => {
  return (
    <Wrapper>
      <Copyright>
        &copy;{new Date().getFullYear()} &nbsp;
        {props.blok[0].copyright}
      </Copyright>
      <SocialList>
        {props.blok[0].social_links.map(link => (
          <SocialItem key={link._uid}>
            <SocialLink to={`${link.url.cached_url}`}>
              <SocialIcon icon={link.icon} name={link.name} />
            </SocialLink>
          </SocialItem>
        ))}
      </SocialList>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  margin-top: 5em;
  padding: 1em 2em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  background: #022d30;
  color: #fff;
`
const Copyright = styled.span`
  display: block;
  vertical-align: middle;
`

const SocialList = styled.ul`
  margin-left: auto;
  list-style: none;
`

const SocialItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  margin-right: 2em;
  :last-child {
    margin-right: 10em;
  }
`
const SocialLink = styled.a.attrs(props => ({
  href: props.to,
  target: "_blank",
  rel: "noreferrer noopener",
}))``

const SocialIcon = styled.img.attrs(props => ({
  src: props.icon,
  alt: props.name,
}))``
