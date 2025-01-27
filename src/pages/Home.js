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

    return (
        <div className='is-preload'>
            <div id="wrapper">
                <div id="bg"></div>
                <div id="overlay"></div>

                <div id="main">
                    <main id="main-header">
                        <h1>Juju Moore</h1>
                        <p>Frontend &nbsp;&bull;&nbsp; UX &nbsp;&bull;&nbsp; Engineer</p>
                        <div className='main-menu'>
                            <ul>
                                {Links.map((link, index) => (
                                    <Link key={index} to={link.href} class="icon brands ">
                                        <li className='list'> {link.icon}
                                            <span className="label">{link.label}</span>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </main>
                </div>
            </div >
        </div >
    );
};


