import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import PageFace from './PageFace'
import OurStory from './OurStory'
import Leads from './Leads'
import Join from './Join'

export default function AboutUs() {

    const [contentHeight, setContentHeight] = useState('1080px')

    return (
        <Col lg={12}>
            <NavBar />
            <PageFace />
            <OurStory />
            <Leads />
            <Join />
            <Footer Top={contentHeight} />
        </Col>
    )
}
