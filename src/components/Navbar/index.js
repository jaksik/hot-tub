import React, { useState } from 'react';
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

const NavbarComponent = ({ siteTitle }) => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div style={{ position: `fixed`, zIndex: `200`, width: `100%` }}>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="mr-auto d-flex align-items-center">
          <img src={icon} width="50px" style={{ margin: 0 }} className="mr-3" />
          {siteTitle}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <div className="d-flex justify-content-end h-100 w-100">
            <Nav navbar>
{/* 
              {links.categories.map((category, index) => (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {category.title}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {category.links.map((link, i) => (
                      <DropdownItem>
                        <NavItem>
                          <NavLink><Link to="/about/">{link.title}</Link></NavLink>
                        </NavItem>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              ))} */}

              {links.mainLinks.map((mainLink, ind) => (
                <NavItem key={ind}>
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