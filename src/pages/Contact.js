import React from 'react'
/**icons */
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
/*component*/
import Nav from '../component/Nav';
import BackButton from '../component/BackButton';
import Banner from '../component/Banner';

export default function Contact(props) {

    return (
        <>
            <Nav />
            <main className='page'>
                <div className='row'>
                    <BackButton to="/" />
                    <h1 className='page-title'>Contact</h1>
                    <div></div>
                </div>

                <div className="about-container">
                    <h2>Let's connect!</h2>

                    <div className='banner-wrapper'>
                        <Banner
                            color1="#309CBD"
                            color2="#31B9E1"
                            title="Linkedin"
                            link="https://www.linkedin.com/in/juju-moore"
                            icon={<BsLinkedin className='icon' />} />
                        <Banner
                            color1="#C08529"
                            color2="#E49D2D"
                            title="email"
                            link="mailto:juhye1215@gmail.com"
                            icon={<MdEmail className='icon' />} />
                    </div>
                </div>

            </main >
        </>
    )
}
