"use client";
import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
    return (
        <footer className="jesta-footer">
            <Container className="text-center">
                <p className="footer-copyright mb-1">
                    Copyright © Natanael Gunawan. All Rights Reserved.
                </p>
                <p className="footer-subtitle mb-0">
                    Tugas Praktikum 5 Oleh <span className="footer-highlight">Natanael Gunawan</span> - 535250046
                </p>
            </Container>
        </footer>
    );
}

export default Footer;