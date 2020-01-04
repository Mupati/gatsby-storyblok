import React from "react"

import "./layout.css"

const Layout = props => {
  return (
    <>
      <main>{props.children}</main>
    </>
  )
}

export default Layout
