import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import Image1d from "../components/image1d";
import Image2 from "../components/image2";
import Image3 from "../components/image3";

const SecondPage = () => (
  <Layout>
    <div className="above-the-fold">
      <Image1d />
      <h1>This is an example of the Gatsby Plugin Image static image.</h1>
      <p>All other images on this page use Gatsby Image.</p>
    </div>
    <Image2 />
    <Image3 />
    <Link to="/">Go back to example using all Gatsby Images</Link>
  </Layout>
);

export default SecondPage;
