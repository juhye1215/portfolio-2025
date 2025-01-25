import React, { useState, useRef, useEffect } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
/**css */
import '../styles/_home.scss';
/**img */
import Name from '../img/work/video/Name-video--portfolio.gif'
/*component*/
import Nav from '../component/Nav';
import Circle from '../component/Circle';
import Card from '../component/Card';

export default function Home() {

    const [showNav, setShowNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                setShowNav(true);
                setScrolled(true);
            } else {
                setShowNav(false);
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className='home'>
            {showNav && <Nav showNav={showNav} />}

            <Element name="section1" className="section">
                <div className="name-container">
                    <img
                        src={Name}
                        alt="name"
                        className={`name ${scrolled ? 'scrolled' : ''}`}
                    />

                    <h1 className={`${scrolled ? 'title-scrolled' : ''}`}>portfolio</h1>
                    <ul className={`my-field ${scrolled ? 'text-scrolled' : ''}`}>
                        <li >frontend engineer</li>
                        <li>∙</li>
                        <li>ux</li>
                        <li>∙</li>
                        <li>design technologist</li>
                    </ul>
                </div>

            </Element>

            <Element name="section2" className="section">
                <div className="work">
                    <p>textsetsets</p>

                </div>
            </Element>
        </main>
    );
};


