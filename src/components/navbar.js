import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React, { Component } from 'react';
import Logo from '../logo192.png';


class Navigation extends Component {
 render() {
  return (
			<Navbar collapseOnSelect fixed='top'  expand="lg" >
				<Navbar.Brand href='/'>
					<img className="logo" src={Logo} alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
                        <NavDropdown id="links" title ="Gestures">
							<NavDropdown.Item href="/pull">Pull</NavDropdown.Item>
							<NavDropdown.Item href="/drag">Drag</NavDropdown.Item>
							<NavDropdown.Item href="/slide">Slide</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link id="links" href="/expandingcards">Expanding Cards</Nav.Link>
                        <Nav.Link id="links" href="/loaders">Infinite loaders</Nav.Link>
                        <Nav.Link id="links" href="/carousels">Carousels</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Navigation;