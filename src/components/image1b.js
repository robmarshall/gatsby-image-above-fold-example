import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
        srcSet={data.placeholderImage.childImageSharp.fluid.srcSetWebp}
        sizes={data.placeholderImage.childImageSharp.fluid.sizes}
      />
      <source
        srcSet={data.placeholderImage.childImageSharp.fluid.srcSet}
        sizes={data.placeholderImage.childImageSharp.fluid.sizes}
      />
      <img
        sizes={data.placeholderImage.childImageSharp.fluid.sizes}
        srcSet={data.placeholderImage.childImageSharp.fluid.srcSet}
        src={data.placeholderImage.childImageSharp.fluid.src}
        alt=""
      />
    </picture>
  )
}

export default Image1b
