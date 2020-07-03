import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Image1c from "../components/image1c"
import Image2 from "../components/image2"
import Image3 from "../components/image3"

const Base64Page = () => (
  <Layout>
    <div className="above-the-fold">
      <Image1c />
      <h1>
        This is an example of a base64 encoded image being used above the fold
      </h1>
      <p>
        This means that the initial page HTML size is increased quite
        dramatically, but does not wait for a response from any server to serve
        the image.
      </p>
      <p>All other images on this page use Gatsby Image.</p>
    </div>
    <Image2 />
    <Image3 />
    <Link to="/">Go back to example using all Gatsby Images</Link>
  </Layout>
)

export default Base64Page
