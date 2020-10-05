import React from "react"
import Img from 'gatsby-image'

import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from 'reactstrap';

import './style.css'

const EmailForm = ({ image }) => (
    <div className="footer-image-wrapper">

        <div className="footer-image-container">

            <Img
                fluid={image}
                style={{ width: `100%`, height: `100%`, position: `absolute` }}
            />

            <div className="background-image-overlay d-flex align-items-center justify-content-center">
                <div>
                    <p className="footer-image-title">Sign up for our news letter to recieve cool facts about the national parks.</p>

                    <InputGroup>
                        <Input placeholder="example@example.com"/>
                        <InputGroupAddon addonType="append"><Button color="success">Submit</Button></InputGroupAddon>
                    </InputGroup>
                </div>
            </div>

        </div>

    </div>
)

export default EmailForm
