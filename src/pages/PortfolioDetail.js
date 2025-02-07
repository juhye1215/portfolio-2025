import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
/** data */
import portfolioData from '../data/portfolioData';
/** icon */
import { IoClose } from 'react-icons/io5';
import Spinner from '../img/bg/Spinner.png';
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

    //lazy loading
    const { ref, inView } = useInView({ triggerOnce: true });
    const [isLoaded, setIsLoaded] = useState(false);

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

                <div ref={ref} className={`video-background ${layout}`}>
                    {!isLoaded && (
                        <div className="spinner">
                            <img src={Spinner} alt='spinner' />
                        </div>
                    )}
                    {inView && video && (
                        <video
                            src={video}
                            autoPlay
                            loop
                            onLoadedData={() => setIsLoaded(true)}
                            className={`video ${layout}`}
                            style={{ opacity: isLoaded ? 1 : 0, }}
                        />
                    )}
                    <div className={`video-overlay ${layout}`}></div>
                </div>
            </div>

            <div className="custom-shape-divider-bottom-1738013340">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
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
                    {link ? (<LinkButton link={link} color="#01cbb7" label="View Site" />) : null}
                </div>


                <div className={`screenshot-container ${layout}`} ref={ref}>
                    {image.map((img, index) => (
                        <img
                            key={index}
                            src={inView ? img : ""}
                            alt={`${title}-${index + 1}`}
                            className={layout}
                            style={{
                                opacity: isLoaded ? 1 : 0,
                            }}
                            onLoad={() => setIsLoaded(true)}
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
                        <div className={`modal-content ${layout}`}>
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