import React from 'react'
import { Col } from "react-bootstrap";
import NavBar from '../Navbar/Navbar'
import AppFace from '../AppFace/AppFace'
import Explain from '../Explain/Explain';
import Cards from '../Cards/Cards';
import Program from '../Program/Program';
import How from '../How/How';
import Reviews from '../Reviews/Reviews';

export default function Main() {
    return (
        <Col lg={12} md={12} xs={12}>
            <NavBar />
            <AppFace />
            <Explain />
            <Cards />
            <Program />
            <How />
            <Reviews />
        </Col>

    )
}

