import React, { useState, useRef, useEffect, } from 'react';
import { Link } from "react-router-dom";

/*component*/
import Nav from '../component/Nav';
import Card from '../component/Card';

/**icons */
import { BsLaptop } from "react-icons/bs";
import { MdPerson2 } from "react-icons/md";
import { GoMail } from "react-icons/go";

export default function Home() {

    const Links = [
        { icon: <BsLaptop />, label: "portfolio", href: "/portfolio" },
        { icon: <MdPerson2 />, label: "about", href: "/about" },
        { icon: <GoMail />, label: "contact", href: "/contact" },

    ];
    // const [showNav, setShowNav] = useState(false);
    // const [scrolled, setScrolled] = useState(false);
    // /**scroll */
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;

    //         if (scrollPosition > 100) {
    //             setShowNav(true);
    //             setScrolled(true);
    //         } else {
    //             setShowNav(false);
    //             setScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div className='is-preload'>
            <div id="wrapper">
                <div id="bg"></div>
                <div id="overlay"></div>
                <div id="main">

                    <header id="main-header">
                        <h1>Juju Moore</h1>
                        <p>Frontend &nbsp;&bull;&nbsp; UX &nbsp;&bull;&nbsp; Engineer</p>
                        <nav>
                            <ul>
                                {Links.map((link, index) => (
                                    <Link key={index} to={link.href} class="icon brands ">
                                        <li className='list'> {link.icon}
                                            <span className="label">{link.label}</span>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </header>
                </div>
            </div >


            {/* <main className='home'>
                {showNav && <Nav showNav={showNav} />}

                <Element name="section1" className="section">
                    <div className="name-container">
                        <img
                            src={Name}
                            alt="name"
                            className={`name ${scrolled ? 'scrolled' : ''}`}
                        />

                        <h1 className={`${scrolled ? 'title-scrolled' : ''}`}>portfolio</h1>
                        <ul className={`job-title ${scrolled ? 'text-scrolled' : ''}`}>
                            <li >frontend</li>
                            <li>∙</li>
                            <li>ux</li>
                            <li>∙</li>
                            <li>engineer </li>
                        </ul>
                    </div>

                </Element>


            </main>
            <Element name="section2" className="section">
                <div className="work">
                    <p>Work archive</p>
                    <Card />
                </div>
            </Element> */}
        </div >
    );
};


