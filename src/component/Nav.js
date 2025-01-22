import React from 'react';
import '../styles/_header.scss';

/**components */
import Logo from './Logo';

export default function Nav(props) {
    const menuItems = ['Portfolio', 'About Me', 'Contact'];

    return (
        <header className="header">
            <Logo />

            <nav className="nav">
                {/* <ul className="menu">
                    {menuItems.map((item, index) => (
                        <li key={index} className="menu-item">
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                        </li>
                    ))}
                </ul> */}
            </nav>
        </header>
    )
}

