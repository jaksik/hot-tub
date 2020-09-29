import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./info-page.css"

export default ({ data }) => {
    
  const info = data.markdownRemark

  return (
    <Layout>
      <SEO title={info.frontmatter.title} keywords={info.frontmatter.tags} />
        <div className="content-container" style={{minHeight:`100vh`}}>
          <h1 className="page-title">{info.frontmatter.title}</h1>
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
      }
    }
  }
`