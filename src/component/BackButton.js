import React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


export default function BackButton({ to }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };
    return (
        <div className="back-button-container">
            <IoChevronBackOutline
                className="back-button"
                onClick={handleClick}
            />
        </div>
    );
}