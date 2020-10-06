import React from "react"
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import { Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"

export default ({ data }) => {
  const info = data.markdownRemark

  return (
    <Layout>
      <SEO title={info.frontmatter.title} keywords={info.frontmatter.tags} />
      <div style={{ overflow: `hidden` }} className="blog-image-container">
        <Img fluid={info.frontmatter.image.childImageSharp.fluid} />
      </div>

      <div className="blog-content-container">
        <h1 className="blog-post-title">{info.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: info.html }} />
      </div>
{/* 
      <Row className="no-gutters">
        <Col lg="3" className="justify-content-center">
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=29&l=ur1&category=outdoorrecreation&banner=054N4NGXCVYM010KSC02&f=ifr&linkID=8e7ee1e017e7fd0669315e6e454c29fb&t=epicnationalp-20&tracking_id=epicnationalp-20" width="120" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>

          </div>
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=health&banner=152P4WD5QBHDV1R52X02&f=ifr&linkID=49cd8c4d4c024f53c4f0baa08fb12cfc&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=gearshop&banner=1Z73Q963NN6XNCX2SJ82&f=ifr&linkID=7924c1601c70bbc4c088f0df0b46f6d8&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>      
              </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=autorv&banner=1E3KPR268PJ6ZNSG7SG2&f=ifr&linkID=7f2da8b647811f08c71a95ae14921bd4&t=epicnationalp-20&tracking_id=epicnationalp-20" width="160" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=mostwishforitem&banner=00TB4X24YWEJ5M688S82&f=ifr&linkID=ad0f3f6265c724568823e0b3885e395a&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>        
            </div>
            <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=29&l=ur1&category=outdoorrecreation&banner=054N4NGXCVYM010KSC02&f=ifr&linkID=8e7ee1e017e7fd0669315e6e454c29fb&t=epicnationalp-20&tracking_id=epicnationalp-20" width="120" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>

          </div>
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=health&banner=152P4WD5QBHDV1R52X02&f=ifr&linkID=49cd8c4d4c024f53c4f0baa08fb12cfc&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=gearshop&banner=1Z73Q963NN6XNCX2SJ82&f=ifr&linkID=7924c1601c70bbc4c088f0df0b46f6d8&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>      
              </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=autorv&banner=1E3KPR268PJ6ZNSG7SG2&f=ifr&linkID=7f2da8b647811f08c71a95ae14921bd4&t=epicnationalp-20&tracking_id=epicnationalp-20" width="160" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=mostwishforitem&banner=00TB4X24YWEJ5M688S82&f=ifr&linkID=ad0f3f6265c724568823e0b3885e395a&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>        
            </div>



        </Col>

        <Col lg="6">
          <h1 className="blog-post-title">{info.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: info.html }} />
        </Col>


        <Col lg="3" className="justify-content-center">
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=29&l=ur1&category=outdoorrecreation&banner=054N4NGXCVYM010KSC02&f=ifr&linkID=8e7ee1e017e7fd0669315e6e454c29fb&t=epicnationalp-20&tracking_id=epicnationalp-20" width="120" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>

          </div>
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=health&banner=152P4WD5QBHDV1R52X02&f=ifr&linkID=49cd8c4d4c024f53c4f0baa08fb12cfc&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=gearshop&banner=1Z73Q963NN6XNCX2SJ82&f=ifr&linkID=7924c1601c70bbc4c088f0df0b46f6d8&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>      
              </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=autorv&banner=1E3KPR268PJ6ZNSG7SG2&f=ifr&linkID=7f2da8b647811f08c71a95ae14921bd4&t=epicnationalp-20&tracking_id=epicnationalp-20" width="160" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=mostwishforitem&banner=00TB4X24YWEJ5M688S82&f=ifr&linkID=ad0f3f6265c724568823e0b3885e395a&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>        
            </div>
            <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=29&l=ur1&category=outdoorrecreation&banner=054N4NGXCVYM010KSC02&f=ifr&linkID=8e7ee1e017e7fd0669315e6e454c29fb&t=epicnationalp-20&tracking_id=epicnationalp-20" width="120" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>

          </div>
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=health&banner=152P4WD5QBHDV1R52X02&f=ifr&linkID=49cd8c4d4c024f53c4f0baa08fb12cfc&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=gearshop&banner=1Z73Q963NN6XNCX2SJ82&f=ifr&linkID=7924c1601c70bbc4c088f0df0b46f6d8&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>      
              </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=autorv&banner=1E3KPR268PJ6ZNSG7SG2&f=ifr&linkID=7f2da8b647811f08c71a95ae14921bd4&t=epicnationalp-20&tracking_id=epicnationalp-20" width="160" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=mostwishforitem&banner=00TB4X24YWEJ5M688S82&f=ifr&linkID=ad0f3f6265c724568823e0b3885e395a&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>        
            </div>



        </Col>
      </Row> */}

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