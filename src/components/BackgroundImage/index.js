import React from "react"
import Img from 'gatsby-image'

import './style.css'

const BackgroundImage = ({ image, title }) => (
    <div className="landing-image-wrapper">
        <div className="landing-image-container">
            <Img
                fluid={image}
                style={{ width:`100%`, height: `100%`, position: `absolute` }}
            />
            <div className="background-image-overlay d-flex align-items-center justify-content-center">
                <h1 className="background-image-title">{title}</h1>
            </div>

        </div>
    </div>
)

export default BackgroundImage
