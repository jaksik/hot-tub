import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import { Row, Col } from 'reactstrap'

import SEO from "../components/seo"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogList from '../components/BlogList'
import BackgroundImage from '../components/BackgroundImage'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'
import svg from '../images/border.svg'
const IndexPage = ({ data }) => {
  console.log("data: ", data);

  const site = data.site;

  const categories = ["Backpacking Stoves", "Car Camping Stoves", "Camping Recipes"]

  return (
    <>
      <SEO title="Home" />
      <Navbar siteTitle={site.siteMetadata.title} />

      <BackgroundImage image={data.landingBackground.childImageSharp.fluid} title="Cook Off-grid" />

      <div className="landing-content-wrapper">

        {categories.map((category, index) => (
          <>
            <div className="landing-content-section">
              <img src={svg} style={{ width: `100%`, marginTop: `-50px`, zIndex: -1 }} />

              <h1 className="landing-section-title" style={{ marginTop: `-70px`, zIndex: 2 }}>{category}</h1>

              <BlogList blogPosts={data.allMarkdownRemark.edges} />

            </div>
            <div className={`bgimg-` + index}></div>
          </>
        ))}

        <Footer siteTitle={site.siteMetadata.title} />

      </div>

    </>
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
  landingBackground: file(relativePath: { eq: "msr.jpg" }) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  allMarkdownRemark {
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