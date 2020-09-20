import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../components/seo"
import Layout from '../components/layout'
import './about.css'

const ContactPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

     <h1 style={{paddingTop:`150px`}}>Contact Pge</h1>

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