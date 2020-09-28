import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../components/seo"
import Layout from '../components/layout'

const ContactPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

     <h1 style={{paddingTop:`150px`, textAlign:`center`}}>Contact Us</h1>
      <p style={{textAlign:`center`}}>Our Email: epicnationalparks@gmail.com</p>
    </Layout>
  )
}

export default ContactPage

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