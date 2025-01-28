import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
/** data */
import portfolioData from '../data/portfolioData';
/** icon */
import { IoClose } from 'react-icons/io5';
/*component*/
import Nav from '../component/Nav';
import BackButton from '../component/BackButton';
import LinkButton from '../component/LinkButton';

export default function PortfolioDetail() {
    const { id } = useParams();
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const portfolio = portfolioData().find((item) => item.id === Number(id));
    const { title, description, layout, type, date, link, video, image } = portfolio;

    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };
    return (
        <>
            <Nav />
            <div className="bg-wrapper">
                <div className="row">
                    <BackButton to="/portfolio" />
                </div>

                <div className="video-background">
                    {video && (
                        <video
                            src={video} autoPlay loop muted playsInline
                            className={`video overlay ${layout}`}
                        />
                    )}
                    <div className="video-overlay"></div>
                </div>
            </div>

            <div class="custom-shape-divider-bottom-1738013340">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                </svg>
            </div>

            <section className={`bottom-wrapper ${layout}`}>

                <div className={`text-container ${layout}`}>
                    <h1 className="title">{title}</h1>
                    <div className="subtitle">
                        <h4>{type}</h4>
                        <h4>{date}</h4>
                    </div>
                    <p>{description}</p>
                    {link ? (<LinkButton link={link} label="View Site" />) : null}
                </div>


                <div className={`screenshot-container ${layout}`}>
                    {image.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${title}-${index + 1}`}
                            className={layout}
                            onClick={() =>
                                openModal(<img src={img} alt={`${title}-${index + 1}`} />)
                            }
                        />
                    ))}
                </div>
            </section>


            {/* Modal */}
            {
                isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className={`modal-content ${layout}`} onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={closeModal}>
                                <IoClose />
                            </button>
                            {modalContent}
                        </div>
                    </div>
                )
            }

        </>
    );
}