import React, { useState, useEffect, useCallback } from "react"
import SbEditable from "storyblok-react"
import Components from "../utils/components"
import styled from "styled-components"
import config from "../../gatsby-config"

import TheHeader from "../components/TheHeader"
import TheFooter from "../components/TheFooter"

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

const StoryblokEntry = props => {
  const [story, setStory] = useState(null)
  const [globalNavi, setGlobalNavi] = useState({ content: {} })

  const loadGlobalNavi = lang => {
    const language = lang === "default" ? "" : lang + "/"
    window.storyblok.get(
      {
        slug: `${language}global`,
        version: "draft",
      },
      data => {
        setGlobalNavi(data.story)
      }
    )
  }

  const loadStory = useCallback(() => {
    window.storyblok.get(
      {
        slug: window.storyblok.getParam("path"),
        version: "draft",
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      ({ story }) => {
        setStory(story)
        loadGlobalNavi(story.lang)
      }
    )
  }, [])

  const initStoryblokEvents = useCallback(() => {
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
  }, [loadStory, story])

  useEffect(() => {
    if (!story) {
      loadStoryblokBridge(() => {
        initStoryblokEvents()
      })
    }
  }, [initStoryblokEvents, story])

  if (story === null) {
    return <div></div>
  }

  let { content } = story
  let globalData = globalNavi.content
  return (
    <SbEditable content={content}>
      {Object.keys(globalData).length > 0 && (
        <TheHeader blok={globalData.header}></TheHeader>
      )}
      <Main>
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
      </Main>
      {Object.keys(globalData).length > 0 && (
        <TheFooter blok={globalData.footer} />
      )}
    </SbEditable>
  )
}

export default StoryblokEntry

const Main = styled.main`
  min-height: 100vh;
  overflow-y: auto;
`
