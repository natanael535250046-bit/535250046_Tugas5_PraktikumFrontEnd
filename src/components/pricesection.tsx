"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

interface PriceItem {
    grade: string;
    price: string;
}

interface ServiceTier {
    tier: string;
    description: string;
    prices: PriceItem[];
}

const PriceSection = () => {
    const services: ServiceTier[] = [
        {
            tier: "Tier 1: Clean Build",
            description: "2-step cut, nub removal, stress-mark removal, inner frame and armor assembly.",
            prices: [
                { grade: "HG / RG (1/144)", price: "Rp 75.000 – Rp 150.000" },
                { grade: "MG / FM (1/100)", price: "Rp 175.000 – Rp 350.000" },
                { grade: "PG (1/60)", price: "Rp 500.000 – Rp 850.000" },
            ],
        },
        {
            tier: "Tier 2: Display",
            description: "Tier 1 + panel lining, water decal application, and full topcoat (Matte or Gloss).",
            prices: [
                { grade: "HG / RG (1/144)", price: "Rp 175.000 – Rp 300.000" },
                { grade: "MG / FM (1/100)", price: "Rp 350.000 – Rp 650.000" },
                { grade: "PG (1/60)", price: "Rp 900.000 – Rp 1.600.000" },
            ],
        },
        {
            tier: "Tier 3: Full Paint",
            description: "Tier 2 + complete primer, full airbrush recolor and shading, metallic frame accents, and weathering.",
            prices: [
                { grade: "HG / RG (1/144)", price: "Rp 500.000 – Rp 900.000" },
                { grade: "MG / FM (1/100)", price: "Rp 1.200.000 – Rp 2.500.000" },
                { grade: "PG (1/60)", price: "Custom (Starts at Rp 3.000.000+)" },
            ],
        },
    ];

    return (
        <Container as="section" className="py-5">
            <h2 className="portfolio-title text-start mb-4"> Our <span className="highlight">Services</span> </h2>

            <Row className="g-4">
                {services.map((service, index) => (
                    <Col key={index} xs={12} md={4}>
                        <Card className="h-100 price-card">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="price-card-title mb-3">
                                    {service.tier}
                                </Card.Title>

                                <Card.Text className="price-card-desc mb-4">
                                    {service.description}
                                </Card.Text>

                                <ListGroup variant="flush" className="mt-auto">
                                    {service.prices.map((item, idx) => (
                                        <ListGroup.Item
                                            key={idx}
                                            className="d-flex justify-content-between align-items-center px-0 py-2"
                                        >
                                            <span className="price-grade">{item.grade}</span>
                                            <span className="price-amount">{item.price}</span>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PriceSection;
