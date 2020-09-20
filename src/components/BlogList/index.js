import { Link } from "gatsby"
import React from "react"
import Img from 'gatsby-image'

import { Row, Col } from 'reactstrap'
import './style.css'

const BlogList = ({ blogPosts }) => (

  <Row className="no-gutters mb-5 justify-content-center">

    {blogPosts.map((node, index) => (
        <Col xs={12} sm={10} md={5} lg={4} className="p-5 p-md-2 p-lg-5" key={index}>
          <Link to={node.node.fields.slug}>
            <div
              className="d-flex align-items-center blog-card"
              style={{ height: 200, position: `relative`  }}
            >
              <div className="overlay"></div>
              <Img
                fluid={node.node.frontmatter.image.childImageSharp.fluid}
                style={{ position: `absolute`, width: `100%` }}
              />
              <h4 className="blog-card-title">
                {node.node.frontmatter.title}
              </h4>
            </div>
          </Link>
        </Col>
      )
    )}

  </Row>

)

export default BlogList
