import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/_portfolio.scss";
import portfolioData from "../data/portfolioData";
/** icon */
import { IoChevronBackOutline } from 'react-icons/io5';
/*component*/
import Nav from '../component/Nav';

export default function Portfolio() {
    const navigate = useNavigate();
    const portfolioItems = portfolioData();

    return (
        <>
            <Nav />
            <div className="back-button-container">
                <IoChevronBackOutline
                    className="back-button"
                    onClick={() => navigate('/')}
                />
            </div>

            <main className="portfolio-container">
                <h1 className="page-title">my work</h1>

                <div className="card-container">
                    {portfolioItems.map((item, index) => (
                        <Link to={`/portfolio/${index}`} key={index} className="portfolio">
                            <div className="portfolio-card" key={index}>
                                <div className="card-image">
                                    <img src={item.image[1]} alt={item.title} />
                                </div>
                                <div className="card-text">
                                    <h3>{item.title}</h3>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main >
        </>
    );
}