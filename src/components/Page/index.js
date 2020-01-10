import React from "react"
import Components from "../../utils/components"

const Page = props => {
  console.log(props)
  return (
    <>
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok,
            path: props.path,
            dateCreated: props.dateCreated,
          })
        )}
    </>
  )
}

export default Page
