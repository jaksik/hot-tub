import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../../components/seo"
import Layout from '../../components/layout'
import './about.css'

const AboutPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

      <div className="content-wrapper">

        <div className="content-container">
          <h1 style={{ paddingTop: `150px`, textAlign: `center` }}>About Us</h1>

          <p>
            Our mission is to inspire people to explore and enjoy nature, while working to protect it at the same time.

          </p>

        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
query {
  landingBackground: file(relativePath: { eq: "porsche.jpg" }) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`