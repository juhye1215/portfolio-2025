import React from 'react';
import { Link } from "react-router-dom";
/**components */
import Logo from './Logo';

export default function Nav({ showNav }) {
    const menuItems = ['portfolio', 'about', 'contact'];

    return (
        <header className={`nav-wrapper ${showNav ? 'show' : ''}`}>
            <Logo />

            <nav className="nav">
                <ul className="menu">
                    {menuItems.map((item, index) => (
                        <li key={index} className="menu-item">
                            <Link to={`/${item}`} smooth={true} duration={500}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

