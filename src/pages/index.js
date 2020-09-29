import React from "react"

import SEO from "../components/seo"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogList from '../components/BlogList'
import BackgroundImage from '../components/BackgroundImage'
import svg from '../images/border.svg'
import CookieConsent from "react-cookie-consent";
import Layout from "../components/layout"
import Img from 'gatsby-image'

import './index.css'

const IndexPage = ({ data }) => {

  const site = data.site;

  return (
    <div style={{ position: `relative`, width: `100%` }}>

      <SEO title="Home" />

      {/* <Img fluid={data.landingBackground.childImageSharp.fluid} title={site.siteMetadata.title} style={{ zIndex: `-1`, position: `fixed`, width: `100%` }} /> */}

      <BackgroundImage image={data.landingBackground.childImageSharp.fluid} title={site.siteMetadata.title}/>

      <Layout style={{ position: `absolute` }}>

        <div className="landing-content-wrapper">

          <div className="landing-content-section">

            <img src={svg} style={{ width: `100%`, marginTop: `-50px`, zIndex: -1 }} />

            <h1 className="landing-section-title" style={{ marginTop: `-70px`, zIndex: 2 }}>Blog</h1>

            <BlogList blogPosts={data.allMarkdownRemark.edges} />

          </div>

        </div>

      </Layout>

    </div>
  )
}

export default IndexPage

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  landingBackground: file(relativePath: { eq: "landing-background.jpg" }) {
    childImageSharp {
      fluid(quality: 70) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
    edges {
      node {
        fields {
          slug
        }
        id
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`