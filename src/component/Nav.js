import React from 'react';
import { Link } from "react-router-dom";
import '../styles/_nav.scss';
/**components */
import Logo from './Logo';

export default function Nav() {
    const menuItems = ['portfolio', 'about', 'contact'];

    return (
        <header className="header">
            <Logo />

            <nav className="nav">
                <ul className="menu">
                    {menuItems.map((item, index) => (
                        <li key={index} className="menu-item">
                            <Link to={`/${item}`} >{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

