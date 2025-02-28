import React from 'react';
import { Link } from "react-router-dom";

export default function Card({ image, title, link, layout }) {

    return (
        <Link to={link} >
            <div className={`card ${layout}`} >
                <img src={image} alt={title} />
                <div className="card-text">
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    );
}