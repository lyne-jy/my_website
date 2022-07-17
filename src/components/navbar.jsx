import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="white" className="justify-content-center" sticky="top">
            <Nav.Link as={Link} to="/"><Navbar.Brand>Andy Li</Navbar.Brand></Nav.Link>
            <Nav>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/photos">Photos</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    );
};

export default NavBar;