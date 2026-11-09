"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            imageUrl: "/images/banner_04.jpg",
        },
        {
            imageUrl: "/images/banner_05.jpg",
        },
        {
            imageUrl: "/images/banner_06.jpg",
        }
    ]

    return (
        <Carousel fade interval={ 4000 } data-bs-theme="dark">
            { slides.map((slide, index) => (
                <Carousel.Item key={ index }>
                    <div
                        style={{
                            backgroundImage:`url(${ slide.imageUrl})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            height:"100vh",
                        }}>
                    </div>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;