"use client"
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    imageUrl: string;
}

const PortfolioSection = () => {
    const slides: Slide[] = [
        {
            imageUrl: "/images/portfolio_01.webp",
        },
        {
            imageUrl: "/images/portfolio_02.webp",
        },
        {
            imageUrl: "/images/portfolio_03.webp",
        },
        {
            imageUrl: "/images/portfolio_04.webp",
        }
    ]

    return (
        <Container as="section" className="py-5">
            <h2 className="portfolio-title text-start mb-4"> Our <span className="highlight">Portfolio</span> </h2>
            
            <div className="mx-auto" style={{ maxWidth: "800px" }}>
                <Carousel fade interval={ 4000 } data-bs-theme="dark">
                    { slides.map((slide, index) => (
                        <Carousel.Item key={ index }>
                            <div
                                style={{
                                    backgroundImage:`url(${ slide.imageUrl})`,
                                    backgroundSize:"cover",
                                    backgroundPosition:"center",
                                    height:"80vh",
                                }}>
                            </div>
                        </Carousel.Item>
                    )
                    )}
                </Carousel>
            </div>
        </Container>
    )
}

export default PortfolioSection;