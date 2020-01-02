import React, { useState, useEffect } from "react"
import SbEditable from "storyblok-react"
import Components from "../utils/components"
import config from "../../gatsby-config"

import TheHeader from "../components/TheHeader"

const sbConfigs = config.plugins.filter(
  item => item.resolve === "gatsby-source-storyblok"
)
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}

const loadStoryblokBridge = cb => {
  let script = document.createElement("script")
  script.type = "text/javascript"
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
  script.onload = cb
  document.getElementsByTagName("head")[0].appendChild(script)
}

// eslint-disable-next-line
const getParam = val => {
  var result = ""
  var tmp = []

  window.location.search
    .substr(1)
    .split("&")
    .forEach(item => {
      tmp = item.split("=")
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1])
      }
    })

  return result
}

const StoryblokEntry = props => {
  const [story, setStory] = useState(null)

  const loadStory = () => {
    window.storyblok.get(
      {
        slug: window.storyblok.getParam("path"),
        version: "draft",
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      data => {
        setStory(data.story)
      }
    )
  }

  useEffect(() => {
    const initStoryblokEvents = () => {
      loadStory()

      let sb = window.storyblok

      sb.on(["change", "published"], payload => {
        loadStory()
      })

      sb.on("input", payload => {
        if (story && payload.story.id === story.id) {
          payload.story.content = sb.addComments(
            payload.story.content,
            payload.story.id
          )
          setStory(payload.story)
        }
      })

      sb.pingEditor(() => {
        if (sb.inEditor) {
          sb.enterEditmode()
        }
      })
    }
    loadStoryblokBridge(() => initStoryblokEvents())
  }, [story])

  if (story === null) {
    return <div></div>
  }

  let { content } = story

  return (
    <SbEditable content={content}>
      <div>
        <TheHeader />
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
      </div>
    </SbEditable>
  )
}

export default StoryblokEntry
