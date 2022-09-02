import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar/Navbar'
import PageFace from './PageFace'
import Professionalx from './Professionalx'
import Footer from '../Footer/Footer'

export default function MeetProfessionals() {
    return (
        <Col lg={12} md={12} xs={12} style={{ border: 'dashed 1px', padding: '0px' }}>
            <NavBar />
            <PageFace />
            <Professionalx />
            <Footer />
        </Col>

    )
}
