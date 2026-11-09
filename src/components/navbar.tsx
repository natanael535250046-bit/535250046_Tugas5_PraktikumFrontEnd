'use client'
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
    const [activeMenu, setActiveMenu] = useState("home");

    return (
        <Navbar expand="lg" sticky="top" className="bg-white border-bottom shadow-sm jesta-navbar">
            <Container>
                <Navbar.Brand href="#home" onClick={() => setActiveMenu("home")} className="navbar-brand-jesta">
                    Trusty<span className="brand-highlight">Builder</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar-nav" />

                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#home" onClick={() => setActiveMenu("home")} className={`nav-link-jesta ${activeMenu === "home" ? "active-nav-jesta" : ""}`}> Home </Nav.Link>
                        <Nav.Link href="#portfolio" onClick={() => setActiveMenu("portfolio")} className={`nav-link-jesta ${activeMenu === "portfolio" ? "active-nav-jesta" : ""}`}> Portfolio </Nav.Link>
                        <Nav.Link href="#services" onClick={() => setActiveMenu("services")} className={`nav-link-jesta ${activeMenu === "services" ? "active-nav-jesta" : ""}`}> Services </Nav.Link>
                        <Nav.Link href="#contacts" onClick={() => setActiveMenu("contacts")} className="p-0 ms-lg-3 mt-2 mt-lg-0">
                            <Button className={`btn-contact ${activeMenu === "contacts" ? "btn-contact-active" : ""}`}> Contact Us </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;