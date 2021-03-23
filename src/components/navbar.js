import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React, { Component } from 'react';


class Navigation extends Component {
 render() {
  return (
			<Navbar collapseOnSelect  expand="lg" >
				<Navbar.Brand href='/'>
					<img className="logo" src="https://img.icons8.com/cotton/64/000000/home--v1.png" alt="brand logo"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
                        <NavDropdown id="links" title ="Gestures">
							<NavDropdown.Item href="/pull">Pull</NavDropdown.Item>
							<NavDropdown.Item href="/drag">Drag</NavDropdown.Item>
							<NavDropdown.Item href="/slide">Slide</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link id="links" href="/expandable">Expanding Card</Nav.Link>
                        <Nav.Link id="links" href="/carousels">Carousel</Nav.Link>
						<Nav.Link id="links" href="/AudioCards">Audio Interactions</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Navigation;