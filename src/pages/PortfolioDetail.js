import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
/** data */
import portfolioData from '../data/portfolioData';
/** icon */
import { IoClose } from 'react-icons/io5';
/*component*/
import Nav from '../component/Nav';
import BackButton from '../component/BackButton';

export default function PortfolioDetail() {
    const { id } = useParams();
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const portfolio = portfolioData().find((item) => item.id === Number(id));
    const { title, description, layout, type, date, link } = portfolio;

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
            <main className='page'>
                <div className='row'>
                    <BackButton to="/portfolio" />
               
                    <div></div>
                </div>

                <div className="portfolio-detail-container">
                    <div className="content-layout">
                        <div className="media-container">

                            <div className="video-container">
                                {portfolio.video && (
                                    <video
                                        src={portfolio.video}
                                        controls
                                        autoPlay
                                        className={layout}
                                        onClick={() => openModal(<video src={portfolio.video} controls autoPlay />)}
                                    />
                                )}
                            </div>

                            <div className="screenshot-container">
                                {portfolio.image.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${title}-${index + 1}`}
                                        className={layout}
                                        onClick={() => openModal(<img src={img} alt={`${title}-${index + 1}`} />)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="text-container">
                            <div className='subtitle'>
                                <h4>{type}</h4>
                                <h4>{date}</h4>
                            </div>
                            <p>{description}</p>
                            <a className='link' href={link} target='_blank' rel="noreferrer">{link}</a>
                        </div>
                    </div>
                </div>


                {/*Modal */}
                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className={`modal-content ${layout}`} onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={closeModal}>
                                <IoClose />
                            </button>
                            {modalContent}
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}