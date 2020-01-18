import React from "react"
import Components from "../utils/components"
import SbEditable from "storyblok-react"
import styled from "styled-components"
import config from "../../gatsby-config"

import TheHeader from "../components/TheHeader"
import TheFooter from "../components/TheFooter"

const sbConfigs = config.plugins.filter(item => {
  return item.resolve === "gatsby-source-storyblok"
})
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}

const loadStoryblokBridge = function(cb) {
  let script = document.createElement("script")
  script.type = "text/javascript"
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
  script.onload = cb
  document.getElementsByTagName("head")[0].appendChild(script)
}

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = { story: null, globalNavi: { content: {} } }
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents()
    })
  }

  loadStory() {
    window.storyblok.get(
      {
        slug: window.storyblok.getParam("path"),
        version: "draft",
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      data => {
        this.setState({ story: data.story })
        this.loadGlovalNavi(data.story.lang)
      }
    )
  }

  loadGlovalNavi(lang) {
    const language = lang === "default" ? "" : lang + "/"
    window.storyblok.get(
      {
        slug: `${language}global`,
        version: "draft",
      },
      data => {
        this.setState({ globalNavi: data.story })
      }
    )
  }

  initStoryblokEvents() {
    this.loadStory()

    let sb = window.storyblok

    sb.on(["change", "published"], payload => {
      this.loadStory()
    })

    sb.on("input", payload => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        )
        this.setState({ story: payload.story })
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return <div></div>
    }

    let content = this.state.story.content
    let globalNavi = this.state.globalNavi.content

    return (
      <SbEditable content={content}>
        {Object.keys(globalNavi).length > 0 && (
          <TheHeader blok={globalNavi.header}></TheHeader>
        )}
        <Main>
          {React.createElement(Components(content.component), {
            key: content._uid,
            blok: content,
          })}
        </Main>
        {Object.keys(globalNavi).length > 0 && (
          <TheFooter blok={globalNavi.footer} />
        )}
      </SbEditable>
    )
  }
}

export default StoryblokEntry

const Main = styled.main`
  min-height: 100vh;
  overflow-y: auto;
`

// import React, { useState, useEffect } from "react"
// import SbEditable from "storyblok-react"
// import Components from "../utils/components"
// import config from "../../gatsby-config"

// import TheHeader from "../components/TheHeader"
// import TheFooter from "../components/TheFooter"

// const sbConfigs = config.plugins.filter(
//   item => item.resolve === "gatsby-source-storyblok"
// )
// const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}

// const loadStoryblokBridge = cb => {
//   let script = document.createElement("script")
//   script.type = "text/javascript"
//   script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
//   script.onload = cb
//   document.getElementsByTagName("head")[0].appendChild(script)
// }

// const StoryblokEntry = props => {
//   const [story, setStory] = useState(null)
//   const [globalNavi, setGlobalNavi] = useState({ content: {} })

//   useEffect(() => {
//     const loadStory = () =>
//       window.storyblok.get(
//         {
//           slug: window.storyblok.getParam("path"),
//           version: "draft",
//           resolve_relations: sbConfig.options.resolveRelations || [],
//         },
//         data => {
//           setStory(data.story)
//           loadGlobalNavi(data.story.lang)
//         }
//       )
//     const initStoryblokEvents = () => {
//       loadStory()

//       let sb = window.storyblok

//       sb.on(["change", "published"], payload => loadStory())

//       sb.on("input", payload => {
//         if (story && payload.story.id === story.id) {
//           payload.story.content = sb.addComments(
//             payload.story.content,
//             payload.story.id
//           )
//           setStory(payload.story)
//         }
//       })

//       sb.pingEditor(() => {
//         if (sb.inEditor) {
//           sb.enterEditmode()
//         }
//       })
//     }
//     loadStoryblokBridge(() => initStoryblokEvents())
//   }, [story])

//   const loadGlobalNavi = lang => {
//     const language = lang === "default" ? "" : lang + "/"
//     window.storyblok.get(
//       {
//         slug: `${language}global`,
//         version: "draft",
//       },
//       data => {
//         setGlobalNavi(data.story)
//       }
//     )
//   }

//   if (story === null) {
//     return <div></div>
//   }

//   let { content } = story
//   let headerFooterContent = globalNavi.content

//   console.log(globalNavi)

//   return (
//     <SbEditable content={content}>
//       <div>
//         <TheHeader blok={headerFooterContent.header} />
//         {React.createElement(Components(content.component), {
//           key: content._uid,
//           blok: content,
//         })}
//       </div>
//       <TheFooter blok={headerFooterContent.footer} />
//     </SbEditable>
//   )
// }

// export default StoryblokEntry
