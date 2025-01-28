import React from 'react';
import mockup from '../img/bg/pplus.avif';
/*component*/
import Nav from '../component/Nav';
import BackButton from '../component/BackButton';
export default function AboutMe(props) {


    return (
        <>
            <Nav />
            <main className='page'>
                <div className='row'>
                    <BackButton to="/" />
                </div>

                <div className="about-container">

                    <h1>Frontend Developer</h1>
                    <h2> Also being called as UX Engineer, Design Technologist</h2>

                    <div className='box right'>
                        <img src={mockup} alt="mockup" />
                        <div className='text-box'>
                            <p>5 years of professional developing mobile app and web app</p>
                        </div>
                    </div>

                    <div className='box left'>
                        <img src={mockup} alt="mockup" />
                        <div className='text-box'>
                            <p>5 years of professional developing mobile app and web app</p>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}
