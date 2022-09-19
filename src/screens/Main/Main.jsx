import React from 'react'
import { Col } from "react-bootstrap"
import NavBar from '../Navbar/Navbar'
import AppFace from '../AppFace/AppFace'
import Explain from '../Explain/Explain'
import Cards from '../Cards/Cards'
import Program from '../Program/Program'
import How from '../How/How'
import Reviews from '../Reviews/Reviews'
import Professionals from '../Professionals/Professionals'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Messenger from '../Messenger/Messenger'

export default function Main() {

    const userInfo1 = ({ displayName: 'admin', photoURL: '', uid: '' })
    
    return (
        <Col lg={12} md={12} xs={12}>
            <NavBar />
            <Messenger userInfo1={userInfo1} />
            <AppFace />
            <Explain />
            <Cards />
            <Program />
            <How />
            {/* <Reviews /> */}
            <Professionals />
            <Contact />
            <Footer />
        </Col>
    )
}

