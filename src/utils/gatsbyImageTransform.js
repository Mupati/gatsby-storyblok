import {
  getFixedGatsbyImage,
  getFluidGatsbyImage,
} from "gatsby-storyblok-image"

export const fluidImage = (image, params) => {
  const fluidProps = getFluidGatsbyImage(image, { ...params })
  return fluidProps
}

export const fixedImage = (image, params) => {
  const fixedProps = getFixedGatsbyImage(image, { ...params })
  return fixedProps
}
