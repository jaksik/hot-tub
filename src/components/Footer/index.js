import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import { Link } from "gatsby"
import { Row, Col } from 'reactstrap'

import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "react-share";

import data from '../../data/sitemap.json'
import image from './image.jpg'
import banner from "../../images/banner.svg"
import './style.css'

const Footer = ({ siteTitle, image, blogPosts }) => {
  console.log("image", image)
  const footerLinks = [
    {
      title: "About Us Policy",
      link: "/about"
    },
    {
      title: "Contact Us",
      link: "/about"
    },
    {
      title: "Privacy Policy",
      link: "/about"
    },
    {
      title: "Cookie Policy",
      link: "/about"
    }
  ]

  return (
    <footer>
      <Row className="no-gutters justify-content-center pt-5">
        <FacebookIcon size={32} className="ml-2" />
        <EmailIcon size={32} className="ml-2" />
        <PinterestIcon size={32} className="ml-2" />
        <TwitterIcon size={32} className="ml-2" />

      </Row>

      <Row className="no-gutters pt-5">
        <Col xs={8} sm={6} lg={3} className="offset-2 offset-sm-3 offset-lg-1 d-flex align-items-center mb-4 mb-lg-0">
          <img src={banner} width="100%"/>
        </Col>

        <Col xs={10} sm={5} lg={3} className="offset-1">
          <h4>Latest Blog Posts</h4>
          <ul>
          {blogPosts.edges.map((post, index) => (
            <li  key={index}>
              <Link to={post.node.fields.slug}>
             {post.node.frontmatter.title}
            </Link>
            </li>
          ))}
          </ul>
        </Col>

        <Col xs={12} sm={5} lg={3} className="offset-1">
          <h4>About Us</h4>
          <ul>
            {footerLinks.map((link, index) => (
              <li  key={index}>
                <Link to={link.link}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </Col>


        <Col xs={12} className="d-flex justify-content-center text-white mt-5 pt-3" style={{borderTop:`1px solid white`}}>
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
