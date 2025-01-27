import React from 'react';
import { Link } from "react-router-dom";
// import { ReactComponent as IconJ } from '../img/svg/J.svg';
// import { ReactComponent as IconM } from '../img/svg/color-m.svg';
// import { ReactComponent as IconO } from '../img/svg/color-o.svg';
// import { ReactComponent as IconO1 } from '../img/svg/color-o-2.svg';
// import { ReactComponent as IconR } from '../img/svg/color-r.svg';
// import { ReactComponent as IconE } from '../img/svg/color-e.svg';

export default function Logo() {

    return (
        <Link to="/" >
            <div className='logo' >
                {/* <IconJ className="icon-j" />
                <svg className="circle-svg">
                    <circle cx="5" cy="5" r="5" fill="orange" />
                </svg> */}
                <h1>Juju</h1>
                {/* <IconM />
                <IconO />
                <IconO1 />
                <IconR />
                <IconE /> */}
            </div>
        </Link>
    )
}
