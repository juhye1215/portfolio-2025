import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { IoMenuOutline } from "react-icons/io5";
import IconJ from '../img/svg/JJ.svg';


export default function Nav() {

    const [showNav, setShowNav] = useState(false);
    const menuItems = [
        { title: "home", link: "" },
        { title: "portfolio", link: "portfolio" },
        { title: "about me", link: "about" },
        { title: "contact", link: "contact" }
    ];

    const toggleNav = () => setShowNav(!showNav);

    return (
        <header className="nav-wrapper">
            <Link to="/" className="logo">
                <img src={IconJ} alt='logo-img' />
                {/* <IconJ className="icon-j" /> */}
            </Link>

            <nav className='navigation'>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={`${process.env.PUBLIC_URL}/${item.link}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

                <Menu right className={`hamburger-menu ${showNav ? 'show' : ''}`} customBurgerIcon={<IoMenuOutline />}>
                    {menuItems.map((item, index) => (
                        <Link key={index}
                            to={`${process.env.PUBLIC_URL}/${item.link}`}
                            duration={500}>
                            {item.title}
                        </Link>
                    ))}
                </Menu>
            </nav>
        </header >
    );
}