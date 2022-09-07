import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar2/Navbar'
import Footer from '../Footer2/Footer'
import { useEffect } from 'react'
import $ from 'jquery'
import { useState } from 'react'
import InfoForm from './Form'
import Overlayer from './Overlayer'

export default function SignUp() {

    return (
        <Col lg={12}>
            <NavBar />
            <Overlayer />
            <InfoForm />
        </Col>
    )
}


