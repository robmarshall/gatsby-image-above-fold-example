import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image1b = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sunset.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <picture>
      <source
        type="image/webp"
        srcset={data.placeholderImage.childImageSharp.fluid.srcSetWebp}
        sizes={data.placeholderImage.childImageSharp.fluid.sizes}
      />
      <source
        srcset={data.placeholderImage.childImageSharp.fluid.srcSet}
        sizes={data.placeholderImage.childImageSharp.fluid.sizes}
      />
      <img
        sizes={data.placeholderImage.childImageSharp.fluid.sizes}
        srcset={data.placeholderImage.childImageSharp.fluid.srcSet}
        src={data.placeholderImage.childImageSharp.fluid.src}
        alt=""
      />
    </picture>
  )
}

export default Image1b
