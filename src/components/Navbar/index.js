import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'; import { Link } from "gatsby"
import icon from '../../images/icon.png'
import links from '../../data/sitemap.json'
import './style.css'
import banner from '../../images/banner.svg'

const NavbarComponent = ({ siteTitle }) => {

  const [collapsed, setCollapsed] = useState(true);

  const [scrollTop, setScrollTop] = useState(0);
  
  const [margin, setMargin] = useState(0);

  useEffect(() => {
    const onScroll = e => {

      let scroll = e.target.documentElement.scrollTop;

      if (scrollTop < scroll) {
        console.log("Scrolling down page");
        if (!collapsed) {
          setCollapsed(true)
        }
        if (margin > -80) {
          setMargin(margin - 10)
        }
        console.log("Margin: ", margin)
      } else if (scrollTop > scroll) {
        console.log("Scrolling up page")
        if (margin < 0) {
          setMargin(margin + 10)
        }
        console.log("Margin: ", margin)
      } 
      
      if (scroll === 0) {
        setMargin(0);
      }

      setScrollTop(scroll);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  // useEffect(() => {
  //   console.log(scrollTop);
  // }, [scrollTop])

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div style={{ position: `fixed`, zIndex: `200`, width: `100%`, marginTop:(margin)}} className="nav-wrapper">
      <Navbar 
      dark expand="md" 
      // style={{background: `#3F2314`}}
      className={(scrollTop > 0 ? 'background' : '')}
      >
        <NavbarBrand href="/" className="mr-auto d-flex align-items-center nav-brand-image">
          {/* <img src={icon} width="50px" style={{ margin: 0 }} className="mr-3" /> */}
          {/* {siteTitle}  */}
          <img src={icon} width="50px" className="nav-brand-icon"/><span className="nav-brand-text">Epic National Parks</span>
          {/* <span style={{color:`red`, fontWeight:`bold`, paddingRight:`5px`}}>Epic</span>National Parks */}
          <img src={banner} style={{ marginBottom:`0`}} className="nav-brand-banner"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <div className="d-flex justify-content-end h-100 w-100">
            <Nav navbar>

              {links.mainLinks.map((mainLink, ind) => (
                <NavItem key={ind} style={{margin:`0 20px`}}>
                    <Link to={mainLink.link} style={{color:`white`}}>{mainLink.title}</Link>
                </NavItem>
              ))}

            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;