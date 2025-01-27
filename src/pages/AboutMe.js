import React from 'react';

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
                    <h1 className="page-title">About Me</h1>
                    <div></div>
                </div>

                <div className="portfolio-container">
                    <p>Im Frontend developer a.k.a UX enginner, design technologist</p>
                </div>
            </main>
        </>
    )
}
