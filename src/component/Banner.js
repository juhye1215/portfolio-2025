import React from 'react'
import LinkButton from './LinkButton';

export default function Banner({ color1, color2, title, link }) {
    return (
        <div className="banner-container">
            <div className="banner-text">
                <h1 style={{ color: color2 }}>{title}</h1>
                <h3 className='subtitle'>Let's connect through {title}</h3>
                <p>Let’s build something great together! Connect with me on LinkedIn to discuss ideas, opportunities, and collaborations.</p>
                <LinkButton link={link} label={`Go ${title}`} />
            </div>

            <div className="banner-images">

                <svg xmlns="http://www.w3.org/2000/svg" width="376" height="340" viewBox="0 0 376 340" fill="none" className="svg1">
                    <path d="M44.9243 324.448C16.1887 310.924 3.87341 267.118 0.941223 227.428C-2.28421 187.444 3.5802 151.869 6.51242 106.887C9.44461 61.9047 9.44461 7.51437 35.5412 0.752319C61.3446 -6.0097 112.951 34.8566 159.573 41.6186C206.196 48.6747 247.833 21.6265 288.884 23.3905C329.935 25.1545 370.399 56.0247 375.384 93.069C380.662 130.407 350.753 174.213 334.626 221.842C318.499 269.47 316.153 321.214 290.057 335.327C263.96 349.733 214.406 326.506 166.611 323.566C119.109 320.626 73.6599 337.973 44.9243 324.448Z" fill={color2} />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="704" height="758" viewBox="0 0 704 758" fill="none" className="svg2">
                    <path d="M571.582 72.965C637.595 123.261 685.886 196.257 699.62 272.369C713.798 348.481 692.975 428.154 645.569 474.889C597.721 522.07 523.29 536.758 467.467 590.615C411.644 644.027 374.872 737.052 325.251 754.856C275.631 772.215 213.605 714.352 149.364 663.166C85.5661 612.425 19.5531 567.915 4.04667 509.607C-11.9028 451.299 22.6544 379.193 49.2368 306.642C76.2623 234.091 95.313 161.985 142.275 105.012C189.238 48.4846 263.668 7.53547 342.973 0.858985C421.834 -5.3724 505.569 22.6688 571.582 72.965Z" fill={color1} />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none" className='svg3'>
                    <circle cx="90" cy="90" r="90" fill={color2} />
                </svg>

            </div>
        </div >
    );
}
