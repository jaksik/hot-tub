import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"
import Img from 'gatsby-image'

export default ({ data }) => {
  const info = data.markdownRemark

  return (
    <Layout>
      <SEO title={info.frontmatter.title} keywords={info.frontmatter.tags} />
      <div style={{ height: `70vh`, overflow: `hidden` }}>
        <Img fluid={info.frontmatter.image.childImageSharp.fluid} />
      </div>
        <div style={{ maxWidth: `600px`, margin: `0 auto` }}>
          <h1 className="blog-post-title">{info.frontmatter.title}</h1>
          {/* <p className="blog-post-description">{info.frontmatter.description}</p> */}
          {/* <p style={{padding: `20`}}>By Connor Jaksik <br/>Oct 10 2019</p> */}
          <div dangerouslySetInnerHTML={{ __html: info.html }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title  
        description
        tags
        date
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`