import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../../components/seo"
import Layout from '../../components/layout'

const CookiePolicyPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

      <div className="content-wrapper">

        <div className="content-container">
          <a href="https://www.privacypolicygenerator.info/live.php?token=fyE42Jrt3jtEFCXz6QMG5f6eeAaJMQcj"><h1 style={{paddingTop:`150px`}}>Our Privacy Policy</h1></a>
        </div>
      </div>
    </Layout>
  )
}

export default CookiePolicyPage

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