import React from 'react';
import '../styles/_header.scss';
import { ReactComponent as IconJ } from '../asset/img/svg/J.svg';
import { ReactComponent as IconM } from '../asset/img/svg/color-m.svg';
import { ReactComponent as IconO } from '../asset/img/svg/color-o.svg';
import { ReactComponent as IconO1 } from '../asset/img/svg/color-o-2.svg';
import { ReactComponent as IconR } from '../asset/img/svg/color-r.svg';
import { ReactComponent as IconE } from '../asset/img/svg/color-e.svg';

export default function Logo() {

    return (
        <div className='logo'>
            <IconJ className="icon-j" />
            <svg className="circle-svg">
                <circle cx="5" cy="5" r="5" fill="orange" />
            </svg>
            <IconM />
            <IconO />
            <IconO1 />
            <IconR />
            <IconE />
        </div>
    )
}
