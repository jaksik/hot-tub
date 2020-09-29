import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ShareBar from '../ShareBar'
import Navbar from "../Navbar"
import Footer from '../Footer'
import CookieConsent from "react-cookie-consent";

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />

      <ShareBar />

      <CookieConsent
        expires={365}
        cookieName="EpicNationalParksCookiePolicy"
      >
        This website uses cookies to enhance the user experience.
        </CookieConsent>

      <main>{children}</main>

      <Footer />

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
