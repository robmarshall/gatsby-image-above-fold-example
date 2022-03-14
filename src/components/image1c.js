import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Image1c = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sunset.jpg" }) {
        childImageSharp {
          fixed(base64Width: 800, quality: 100) {
            base64
          }
        }
      }
    }
  `);

  return (
    <img src={data.placeholderImage.childImageSharp.fixed.base64} alt="" />
  );
};

export default Image1c;
