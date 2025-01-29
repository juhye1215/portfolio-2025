import React from 'react';
/*component*/
import Nav from '../component/Nav';
import BackButton from '../component/BackButton';
/**data */
import aboutMeData from '../data/aboutMeData';


export default function AboutMe() {
    return (
        <>
            <Nav />
            <main className='page'>
                <div className='row'>
                    <BackButton to="/" />
                    <h1 className='page-title'>Frontend Engineer</h1>
                    <div></div>
                </div>

                <div className="about-container">
                    <h2>Also being called UX Engineer or Design Technologist</h2>

                    {aboutMeData.map((item, i) => (
                        <div key={item.id} className={`box list-${i + 1}`}>
                            <img src={item.img} alt="about me images" />
                            <div className="text-box">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </main >
        </>
    )
}
