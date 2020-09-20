import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Row, Col } from 'reactstrap'
import './style.css'

const Footer = ({ siteTitle }) => {
  const about = ["About Us", "Contact Us", "Privacy Policy", "Cookie Policy"]
  return (
    <footer
      style={{
        background: `#343a40`,
      }}
    >

      <Row className="no-gutters d-flex justify-content-around pt-5">

        <Col xs={12} sm={5} xl={2}>
          <h4>Popular Blog Posts</h4>
          <ul>
            {about.map((item, index) => (
              <Link to={item}>
                <ul>{item}</ul>
              </Link>
            ))}
          </ul>
        </Col>

        <Col xs={12} sm={5} xl={2}>
          <h4>About</h4>
          <ul>
            {about.map((item, index) => (
              <Link to={item}>
                <ul>{item}</ul>
              </Link>
            ))}
          </ul>
        </Col>

        <Col xs={12} sm={5} xl={2}>
          <h4>About</h4>
          <ul>
            {about.map((item, index) => (
              <Link to={item}>
                <ul>{item}</ul>
              </Link>
            ))}
          </ul>
        </Col>

        <Col xs={12} sm={5} xl={2}>
          <h4>About</h4>
          <ul>
            {about.map((item, index) => (
              <Link to={item}>
                <ul>{item}</ul>
              </Link>
            ))}
          </ul>
        </Col>



        <Col xs={12} className="d-flex justify-content-center text-white pt-5">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Col>

      </Row>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
