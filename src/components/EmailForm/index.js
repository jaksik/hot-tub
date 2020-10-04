import React from "react"
import Img from 'gatsby-image'

import './style.css'

const BackgroundImage = ({ image }) => (
    <div className="footer-image-wrapper">

        <div className="footer-image-container">
            
            <Img
                fluid={image}
                style={{ width: `100%`, height: `100%`, position: `absolute` }}
            />

            <div className="background-image-overlay d-flex align-items-center justify-content-center">
               <div>
               <p className="footer-image-title">Sign up for our news letter to recieve cool facts about the national parks.</p>
  
  <input placeholder="Sign up for our newsletter" style={{margin:`0 auto`, width:`100%`}}/>
               </div>
            </div>

        </div>

    </div>
)

export default BackgroundImage
