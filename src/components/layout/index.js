import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ShareBar from '../ShareBar'
import Navbar from "../Navbar"
import Footer from '../Footer'
import CookieConsent from "react-cookie-consent";
import EmailForm from '../EmailForm'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      footerImage: file(relativePath: { eq: "footer-image.jpg" }) {
        childImageSharp {
          fluid(quality: 70) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      blogPosts: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, limit: 4) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />

      {/* <ShareBar /> */}

      <CookieConsent
        expires={365}
        cookieName="EpicNationalParksCookiePolicy"
      >
        This website uses cookies to enhance the user experience.
        </CookieConsent>

      <main>{children}</main>
      <EmailForm image={data.footerImage.childImageSharp.fluid}/>
      <Footer image={data.footerImage.childImageSharp.fluid} blogPosts={data.blogPosts}/>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
