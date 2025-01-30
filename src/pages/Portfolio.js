import React, { useEffect, useRef } from 'react'
import portfolioData from "../data/portfolioData";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
/**swipe function */
import { useSwipe } from '../function/useSwipe';
import { onWheel } from '../function/onWheel';
/*component*/
import Nav from '../component/Nav';
import BackButton from '../component/BackButton';
import Card from '../component/Card';

export default function Portfolio() {

    const portfolioItems = portfolioData();
    /**filter */
    const filterItemsByCategory = (category) =>
        portfolioItems.filter((item) => item.category === category);

    const ref = useRef(null);
    const { onMouseDown, onMouseMove, onMouseUp } = useSwipe(ref);

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
                        <ScrollMenu
                            onWheel={onWheel}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={() => onMouseUp(ref.current)}
                            apiRef={ref}
                        >
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
                        <ScrollMenu
                            onWheel={onWheel}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={() => onMouseUp(ref.current)}
                            apiRef={ref}
                        >
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
                        <ScrollMenu
                            onWheel={onWheel}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={() => onMouseUp(ref.current)}
                            apiRef={ref}
                        >
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
                        <ScrollMenu
                            onWheel={onWheel}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={() => onMouseUp(ref.current)}
                            apiRef={ref}
                        >
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
