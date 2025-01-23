import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/_circle.scss";
import { media } from "../data/mediaImport";

export default function Circle() {

    const images = [
        { src: media.UXCareer.images[0], title: 'View UX Career site' },
        { src: media.StyleDictionary.images[3], title: 'Style Token Design System' },
        { src: media.eReader.images[1], title: 'View eReader tablet' },
        { src: media.Recruiter.images[3], title: 'View Recruiter dashboard' },
        { src: media.Recruiter.images[0], title: 'Recruiter' },
        { src: media.Recruiter.images[0], title: 'Recruiter' },
        { src: media.Recruiter.images[0], title: 'Recruiter' },
        { src: media.Recruiter.images[0], title: 'Recruiter' },
        { src: media.Recruiter.images[0], title: 'Recruiter' },
        { src: media.Recruiter.images[0], title: 'Recruiter' },
    ];



    const totalRotationTime = 3000; // 회전 지속 시간 (3초)
    const totalRotationAngle = 2 * Math.PI; // 360도 회전 (2 * Math.PI 라디안)

    const [angle, setAngle] = useState(0); // 회전 각도 상태
    const [radius, setRadius] = useState(30); // 원의 반지름 상태 (초기값 60)
    const [selectedIndex, setSelectedIndex] = useState(null);
    const animationFrameId = useRef(null); // 애니메이션 프레임 ID를 저장할 ref
    const startTimeRef = useRef(null); // 애니메이션 시작 시간을 저장할 ref
    const scrollTimeoutRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth <= 480) {
                setRadius(30);
            } else if (window.innerWidth <= 768) {
                setRadius(60);
            } else {
                setRadius(120);
            }
        };
        updateRadius();
        window.addEventListener("resize", updateRadius);
        /**rotate images */
        const rotateImages = (timestamp) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            const elapsedTime = timestamp - startTimeRef.current;
            const progress = Math.min(elapsedTime / totalRotationTime, 1);
            const currentAngle = totalRotationAngle * progress;
            setAngle(currentAngle);

            if (window.innerWidth <= 480) {
                const currentRadius = 30 + (200 - 30) * progress;
                setRadius(currentRadius);
            } else if (window.innerWidth <= 768) {
                const currentRadius = 60 + (350 - 60) * progress;
                setRadius(currentRadius);
            } else {
                const currentRadius = 120 + (550 - 120) * progress;
                setRadius(currentRadius);
            }

            if (progress < 1) {
                animationFrameId.current = requestAnimationFrame(rotateImages);
            }
        };
        animationFrameId.current = requestAnimationFrame(rotateImages);

        return () => {
            window.removeEventListener("resize", updateRadius);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    /**mouse hover */
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    //mouse scroll
    const handleScroll = (event) => {

        if (scrollTimeoutRef.current) return;
        scrollTimeoutRef.current = setTimeout(() => {
            scrollTimeoutRef.current = null;
        }, 150);

        const scrollDirection = event.deltaY;
        if (scrollDirection > 0) {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else {
            setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="circle-container">
            <h1>portfolio 2025 </h1>
            <ul>
                <li>frontend engineer</li>
                <li>∙</li>
                <li>ux</li>
                <li>∙</li>
                <li>design technologist</li>
            </ul>

            {images.map((image, index) => {
                const angleOffset = (index / images.length) * Math.PI * 2;
                const x = radius * Math.cos(angle + angleOffset);
                const y = radius * Math.sin(angle + angleOffset);
                return (
                    <Link to={`/portfolio/${index}`} key={index} className="portfolio">
                        <img
                            src={image.src}
                            alt={`portfolio-${index}`}
                            style={{
                                top: `calc(50% + ${y}px)`,
                                left: `calc(50% + ${x}px)`,
                                transform: (selectedIndex === index || hoveredIndex === index) ? "scale(1.5)" : "none",
                                transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                        {selectedIndex === index &&
                            <div className="tooltip" style={{
                                top: `calc(60% + ${y}px)`,
                                left: `calc(46% + ${x}px)`,
                            }}>
                                {images[selectedIndex].title}</div>
                        }
                    </Link>
                );
            })}
        </div>
    );
}
