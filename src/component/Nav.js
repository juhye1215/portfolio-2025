import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { IoMenuOutline } from "react-icons/io5";
import { ReactComponent as IconJ } from '../img/svg/J.svg';

export default function Nav() {
    const [showNav, setShowNav] = useState(false);
    const menuItems = ['portfolio', 'about', 'contact'];

    const toggleNav = () => setShowNav(!showNav);

    return (
        <header className="nav-wrapper">
            <Link to="/" className="logo">
                <IconJ className="icon-j" />
            </Link>

            <nav className='navigation'>
                <ul>
                    {menuItems.map((item, index) => (
                        <Link key={index} to={`/${item}`} >
                            <li>{item} </li>
                        </Link>
                    ))}
                </ul>

                <Menu right className={`hamburger-menu ${showNav ? 'show' : ''}`} customBurgerIcon={<IoMenuOutline />}>
                    {menuItems.map((item, index) => (
                        <Link to={`/${item}`} smooth={true} duration={500}>
                            {item}
                        </Link>
                    ))}
                </Menu>
            </nav>
        </header >
    );
}