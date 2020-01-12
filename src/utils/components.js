import Layout from "../components/Layout"
import Page from "../components/Page"
import ComponentNotFound from "../components/NotFound"
import Category from "../components/Category"

import Hero from "../components/Hero"
import HomeCategory from "../components/Home/HomeCategory"
import TheHeader from "../components/TheHeader"
import TheFooter from "../components/TheFooter"
import Article from "../components/Article"
import ArticlePreview from "../components/ArticlePreview"
import ArticleList from "../components/ArticleList"
import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import Author from "../components/Author"

const ComponentList = {
  global: Layout,
  page: Page,
  hero: Hero,
  category: Category,
  home_category: HomeCategory,
  header: TheHeader,
  footer: TheFooter,
  article: Article,
  article_preview: ArticlePreview,
  article_list: ArticleList,
  heading: Heading,
  paragraph: Paragraph,
  author: Author,
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
