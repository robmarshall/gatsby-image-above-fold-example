import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Image1d = () => (
  <StaticImage
    src="../images/sunset.jpg"
    width={800}
    loading="eager"
    fadeIn={false}
    alt=""
  />
);

export default Image1d;
