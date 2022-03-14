import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image1 from "../components/image1";
import Image2 from "../components/image2";
import Image3 from "../components/image3";

const IndexPage = () => (
  <Layout>
    <div className="above-the-fold">
      <Image1 />
      <h1>This is an example of Gatsby Image being used above the fold</h1>
      <p>
        All the images on this page use Gatsby Image, which causes a longer
        largest contentful load time.
      </p>
    </div>
    <Image2 />
    <Image3 />
    <Link to="/alternate/">Example of plain image above fold</Link> <br />
    <Link to="/base64/">Example of base64 image above fold</Link> <br />
    <Link to="/gatsby-plugin-image/">
      Example of Gatsby-Plugin-Image above fold
    </Link>{" "}
    <br />
  </Layout>
);

export default IndexPage;
