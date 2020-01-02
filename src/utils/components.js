import Page from "../components/Page"
import Grid from "../components/Grid"
import Teaser from "../components/Teaser"
import Feature from "../components/Feature"
import ComponentNotFound from "../components/NotFound"
import Category from "../components/Category"

import Hero from "../components/About/Hero"
import HomeCategory from "../components/About/HomeCategory"

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  hero: Hero,
  category: Category,
  home_category: HomeCategory,
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
