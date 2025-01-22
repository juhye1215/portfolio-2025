import React from 'react'
import { useParams } from 'react-router-dom';

/*component*/
import Nav from '../component/Nav';
export default function Project(props) {
    const { id } = useParams()

    return (
        <>
            <Nav />
            <h1 style={{ color: 'white' }}>Project {id}</h1>
        </>
    )
}
