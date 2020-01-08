import React from "react"
import Components from "../../utils/components"

const Page = props => (
  <main>
    {props.blok.body &&
      props.blok.body.map(blok =>
        React.createElement(Components(blok.component), {
          key: blok._uid,
          blok: blok,
        })
      )}
  </main>
)

export default Page
