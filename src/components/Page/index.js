import React from "react"
import Components from "../../utils/components"

const Page = props => (
  <>
    {props.blok.body &&
      props.blok.body.map(blok =>
        React.createElement(Components(blok.component), {
          key: blok._uid,
          blok: blok,
        })
      )}
  </>
)

export default Page
