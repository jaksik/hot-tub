import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Row, Col } from 'reactstrap'
import data from '../../data/sitemap.json'
import './style.css'

const Footer = ({ siteTitle }) => {
  const about = ["About Us", "Contact Us", "Privacy Policy", "Cookie Policy"]
  return (
    <footer
      style={{
        background: `#343a40`,
        width: `100%`
      }}
    >

      <Row className="no-gutters justify-content-around pt-5">

        {/* {data.footer.columns.map((column, index) => {
          console.log("column: ", column.links);
          return (
            <Col xs={12} sm={5} xl={2} key={index}>
              <h4 className="text-white">{column.title}</h4>
              <ul>
                {column.links.map((link, i) => {
                  console.log("Link: ", link)
                  return (
                    <li style={{listStyle:`none`}}>  
                    <Link to={link.link} key={i} style={{color:`white`}}>
                      {link.title}
                    </Link>
                    </li>
                  )
                })}
              </ul>
            </Col>
          )
        }
        )} */}

        <Link to="/about" style={{ color: `white` }}>
          About
        </Link>

        <Link to="/about/cookie-policy" style={{ color: `white` }}>
          Cookie Policy
        </Link>

        <Link to="/about/privacy-policy" style={{ color: `white` }}>
          Privacy Policy
        </Link>

        <Link to="/about" style={{ color: `white` }}>
          Contact
        </Link>


        <Col xs={12} className="d-flex justify-content-center text-white pt-5">
          © {new Date().getFullYear()}, Epic National Parks
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
