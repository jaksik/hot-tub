import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../components/seo"
import Layout from '../components/layout'
import './about.css'

const AboutPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

     <div className="content-wrapper">

     <div className="content-container">
        <h1 style={{paddingTop:`150px`, textAlign:`center`}}>About Us</h1>

        <p>
          Founded in 2020, Epic National Parks was created to inspire others to get out and enjoy the beautiful nature that makes America what it is.
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
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`