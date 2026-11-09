"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React from "react";
import { FaWhatsapp, FaEnvelope, FaLine } from "react-icons/fa6";

interface ContactItem {
    icon: React.ReactNode;
    platform: string;
    contact: string;
}

const ContactSection = () => {
    const contacts: ContactItem[] = [
        {
            platform: "WhatsApp: ",
            contact: "+62 999-7777-5555",
            icon: <FaWhatsapp size="36px" color="#00857a" />,
        },
        {
            platform: "Email: ",
            contact: "YourTrustyBuilder@gmail.com",
            icon: <FaEnvelope size="36px" color="#00857a" />,
        },
        {
            platform: "Line: ",
            contact: "YourTrustyBuilder",
            icon: <FaLine size="36px" color="#00857a" />,
        },
    ];

    return (
        <Container as="section" className="py-5">
            <h2 className="portfolio-title text-start mb-4"> Our <span className="highlight">Contacts</span> </h2>

            <Row className="g-4">
                {contacts.map((item, index) => (
                    <Col key={index} xs={12} md={4}>
                        <Card className="h-100 contact-card">
                            <Card.Body className="d-flex flex-column">
                                <Card.Text className="contact-card-desc mb-0">
                                    <span className="contact-icon">{item.icon}</span>
                                    <span className="contact-platform">{item.platform}</span>
                                    <span className="contact-value">{item.contact}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ContactSection;
