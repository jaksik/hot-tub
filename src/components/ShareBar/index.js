import React, { useState, useEffect } from "react"

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    InstapaperShareButton,
    InstapaperIcon,
    LinkedinShareButton,
    LinkedinIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";

export default function ShareBar() {

    const [currentLocation, setCurrentLocation] = useState('');


    useEffect(() => {
        const x = window.location.href;
        console.log("X : ", x)
        setCurrentLocation(x);
      })
    
    return (
      <div
        style={{
            width:`fit-content`,
            position:`fixed`,
            marginTop: `200px`,
            zIndex:200
    }}
      >
            <FacebookShareButton
            className="network__share-button"
            url={currentLocation}
            quote={"hello"}
        >
            <FacebookIcon
                size={32}
            />
        </FacebookShareButton>
        <br/>
        <LinkedinShareButton
            className="network__share-button"
            url={currentLocation}
            quote={"hello"}
        >
            <LinkedinIcon
                size={32}
            />
        </LinkedinShareButton>
        <br/>

        <TwitterShareButton
            className="network__share-button"
            url={currentLocation}
            quote={"hello"}
        >
            <TwitterIcon
                size={32}
            />
        </TwitterShareButton>
        <br/>

        <InstapaperShareButton
            className="network__share-button"
            url={currentLocation}
            quote={"hello"}
        >
            <InstapaperIcon
                size={32}
            />
        </InstapaperShareButton>
        <br/>

        <PinterestShareButton
            className="network__share-button"
            url={currentLocation}
            quote={"hello"}
        >
            <PinterestIcon
                size={32}
            />
        </PinterestShareButton>
        <br/>

        <EmailShareButton
            className="network__share-button"
            url={currentLocation}
            quote={"hello"}
        >
            <EmailIcon
                size={32}
            />
        </EmailShareButton>
      </div>
    )
}