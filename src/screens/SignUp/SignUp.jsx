import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar2/Navbar'
import Footer from '../Footer2/Footer'
import { useEffect } from 'react'
import $ from 'jquery'
import { useState } from 'react'
import Overlayer from './Overlayer'

export default function SignUp() {

    return (
        <Col lg={12}>
            <NavBar />
            <Overlayer />

        </Col>
    )
}

const Styles = ({
    wrap: {
        // position: 'relative',
        border: 'dashed 2px red',
        height: '200px',
        width: '200px'
    }
})