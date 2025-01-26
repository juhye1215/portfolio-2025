import React, { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import portfolioData from "../data/portfolioData";
/** icon */
import { IoChevronBackOutline } from 'react-icons/io5';
/*component*/
import Nav from '../component/Nav';
import Card from '../component/Card';

export default function Portfolio() {
    const navigate = useNavigate();
    const portfolioItems = portfolioData();
    const cardContainerRef = useRef(null);
    const handleHorizontalScroll = (e) => {
        e.preventDefault();
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollLeft += e.deltaY * 2;
        }
    };

    const filterItemsByCategory = (category) =>
        portfolioItems.filter((item) => item.category === category);

    return (
        <>
            <Nav />
            <div className="back-button-container">
                <IoChevronBackOutline
                    className="back-button"
                    onClick={() => navigate('/')}
                />
            </div>

            <div className="portfolio-container">
                <h1 className="page-title">projects</h1>

                {/* Mobile Section */}
                <h2>mobile</h2>
                <section
                    className="card-container custom-scrollbar"
                    onWheel={handleHorizontalScroll}
                    ref={cardContainerRef}
                >
                    {filterItemsByCategory('app').map((item, index) => (
                        <Card
                            key={index}
                            image={item.image[1]}
                            title={item.title}
                            link={`/portfolio/${index}`}
                        />
                    ))}
                </section>

                {/* Design System Section */}
                <h2>design System</h2>
                {/* <section
                    className="card-container"
                    onWheel={(e) => handleHorizontalScroll(e, designSystemRef)}
                    ref={designSystemRef}
                >
                    {filterItemsByCategory('design system').map((item, index) => (
                        <Card
                            key={index}
                            image={item.image[1]}
                            title={item.title}
                            link={`/portfolio/${index}`}
                        />
                    ))}
                </section> */}
            </div>
        </>
    );
}

