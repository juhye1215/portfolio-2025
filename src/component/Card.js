import React, { useContext } from 'react';

import { Link } from "react-router-dom";
import { media } from "../data/mediaImport";

export default function Card({ image, title, link }) {

    return (
        <Link to={link} >
            <div className="card">
                <img src={image} alt={title} />
                <div className="card-text">
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    );
}