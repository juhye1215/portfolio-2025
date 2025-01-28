import React, { useRef, useEffect } from 'react';
import portfolioData from "../data/portfolioData";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import "react-horizontal-scrolling-menu/dist/styles.css";

/*component*/
import Nav from '../component/Nav';
import Card from '../component/Card';
import BackButton from '../component/BackButton';

export default function Portfolio() {

    const portfolioItems = portfolioData();
    /**filter */
    const filterItemsByCategory = (category) =>
        portfolioItems.filter((item) => item.category === category);

    return (
        <>
            <Nav />
            <main className='page'>

                <div className='row'>
                    <BackButton to="/" />
                    <h1 className="page-title">Dev projects</h1>
                    <div></div>
                </div>

                <div className="portfolio-container">
                    <section className='card-wrapper'>
                        <h2>mobile app </h2>
                        <div className='line'></div>
                        <ScrollMenu>
                            {filterItemsByCategory('app').map((item) => (
                                <Card
                                    key={item.id}
                                    image={item.image[1]}
                                    title={item.title}
                                    layout={item.layout}
                                    link={`${process.env.PUBLIC_URL}/portfolio/${item.id}`}
                                />
                            ))}
                        </ScrollMenu>
                    </section>

                    <section className='card-wrapper'>
                        <h2>Web </h2>
                        <div className='line'></div>
                        <ScrollMenu>
                            {filterItemsByCategory('web').map((item) => (
                                <Card
                                    key={item.id}
                                    image={item.image[1]}
                                    title={item.title}
                                    link={`${process.env.PUBLIC_URL}/portfolio/${item.id}`}
                                />
                            ))}
                        </ScrollMenu>
                    </section>

                    <section className='card-wrapper'>
                        <h2>design System </h2>
                        <div className='line'></div>
                        <ScrollMenu>
                            {filterItemsByCategory('design system').map((item) => (
                                <Card
                                    key={item.id}
                                    image={item.image[2]}
                                    title={item.title}
                                    link={`${process.env.PUBLIC_URL}/portfolio/${item.id}`}
                                />
                            ))}
                        </ScrollMenu>
                    </section>

                    <section className='card-wrapper'>
                        <h2>navigation </h2>
                        <div className='line'></div>
                        <ScrollMenu>
                            {filterItemsByCategory('navigation').map((item) => (
                                <Card
                                    key={item.id}
                                    image={item.image[0]}
                                    title={item.title}
                                    link={`${process.env.PUBLIC_URL}/portfolio/${item.id}`}
                                />
                            ))}
                        </ScrollMenu>
                    </section>
                </div >
            </main >
        </>
    );
}

