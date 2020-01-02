const transformImage = (image, option = null) => {
  const imageService = "//img2.storyblok.com/"
  const path = image.replace("//a.storyblok.com", "")
  if (option === null) {
    return `https:${imageService}${path}`
  }
  return `https:${imageService}${option}${path}`
}

export default transformImage
