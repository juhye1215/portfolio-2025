import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Add Link for routing
import "../styles/_circle.scss";
import nemoTooltip from '../asset/img/work/nemo-tooltip.png';

export default function Circle(props) {
    const images = [
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
        nemoTooltip,
    ];

    const totalRotationTime = 5000; // 회전 지속 시간 (7초)
    const totalRotationAngle = 2 * Math.PI; // 360도 회전 (2 * Math.PI 라디안)

    const [angle, setAngle] = useState(0); // 회전 각도 상태
    const [radius, setRadius] = useState(100); // 원의 반지름 상태 (초기값 100)
    const [selectedIndex, setSelectedIndex] = useState(null); // 선택된 이미지 인덱스를 추적
    const animationFrameId = useRef(null); // 애니메이션 프레임 ID를 저장할 ref
    const startTimeRef = useRef(null); // 애니메이션 시작 시간을 저장할 ref
    const scrollTimeoutRef = useRef(null);


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

        // 회전 애니메이션
        const rotateImages = (timestamp) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            const elapsedTime = timestamp - startTimeRef.current; // 경과 시간 계산
            const progress = Math.min(elapsedTime / totalRotationTime, 1);

            // 회전 각도 계산 (7초 동안 360도 회전)
            const currentAngle = totalRotationAngle * progress;
            setAngle(currentAngle);

            if (window.innerWidth <= 480) {
                // 모바일에서는 50에서 300으로 증가
                const currentRadius = 30 + (200 - 30) * progress;
                setRadius(currentRadius);
            } else if (window.innerWidth <= 768) {
                const currentRadius = 60 + (350 - 60) * progress;
                setRadius(currentRadius);
            } else {
                // 데스크탑에서는 100에서 600으로 증가
                const currentRadius = 120 + (650 - 120) * progress;
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

    //스크롤이벤트
    const handleScroll = (event) => {
        // Prevent skipping images by controlling scroll speed
        if (scrollTimeoutRef.current) return; // Skip if the event is too fast

        scrollTimeoutRef.current = setTimeout(() => {
            scrollTimeoutRef.current = null;
        }, 150); // Adjust the 150ms delay to control the scroll speed

        const scrollDirection = event.deltaY;

        // Move to next or previous image based on scroll direction
        if (scrollDirection > 0) {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length); // Scroll down, go to the next image
        } else {
            setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Scroll up, go to the previous image
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
            <h1>portfolio 2025</h1>
            <ul>
                <li>frontend engineer</li>
                <li>∙</li>
                <li>ux</li>
                <li>∙</li>
                <li>design technologist</li>
            </ul>


            {images.map((src, index) => {
                const angleOffset = (index / images.length) * Math.PI * 2; // 각 이미지의 초기 각도
                const x = radius * Math.cos(angle + angleOffset); // X 좌표 계산
                const y = radius * Math.sin(angle + angleOffset); // Y 좌표 계산
                return (
                    <Link to={`/project/${index}`} key={index} className="portfolio">
                        <img
                            src={src}
                            alt={`portfolio-${index}`}
                            style={{
                                top: `calc(50% + ${y}px)`,
                                left: `calc(50% + ${x}px)`,
                                transform: selectedIndex === index ? "scale(2)" : "none",
                                transition: "transform 0.3s ease",
                            }}
                        />
                        {selectedIndex === index && (
                            <div className="tooltip" style={{
                                top: `calc(60% + ${y}px)`,
                                left: `calc(40% + ${x}px)`,
                            }}>This is tooltip {index + 1}</div>
                        )}
                    </Link>
                );
            })}
        </div>
    );
}
