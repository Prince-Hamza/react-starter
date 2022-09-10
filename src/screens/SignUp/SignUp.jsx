import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer2/Footer'
import InfoForm from './Form'
import Overlayer from './Overlayer'

export default function SignUp() {

    return (
        <Col g={12} md={12} xs={12} style={{ padding: '0px' }} >
            <NavBar />
            <Overlayer />
            <InfoForm />
        </Col>
    )
}


