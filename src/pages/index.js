import React from "react"

import SEO from "../components/seo"
import BlogList from '../components/BlogList'
import BackgroundImage from '../components/BackgroundImage'
import svg from '../images/border.svg'
import Layout from "../components/layout"
import './index.css'

const IndexPage = ({ data }) => {

  const site = data.site;

  return (
    <div style={{ position: `relative`, width: `100%` }}>

      <SEO title="Home" />

      <BackgroundImage image={data.landingBackground.childImageSharp.fluid} title={site.siteMetadata.title}/>

      <Layout style={{ position: `absolute` }}>

        <div className="landing-content-wrapper">

          <div className="landing-content-section">

            <img src={svg} style={{ width: `100%`, zIndex: -1 }} className="section-border"/>

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