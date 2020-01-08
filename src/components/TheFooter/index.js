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
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: calc(-2rem - 28px);
  padding: 1em 2em;
  background: #022d30;
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Copyright = styled.span`
  display: block;
  vertical-align: middle;
`

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

const SocialItem = styled.li`
  margin-right: 2em;
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
