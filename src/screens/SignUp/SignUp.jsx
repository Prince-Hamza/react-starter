import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer2/Footer'
import InfoForm from './Form'
import Overlayer from './Overlayer'
import { useEffect } from 'react'
import $ from 'jquery'

export default function SignUp() {
    useEffect(() => {
        var $page = $('#signUpPage')
        var l = $page.text().length
        $page.animate({ scrollTo: 100 })
        $page.animate({ scrollTop: l }, 1000);
    }, [])

    return (
        <Col g={12} md={12} xs={12} style={{ padding: '0px' }} id={'signUpPage'}>
            <NavBar />
            <Overlayer />
            <InfoForm />
        </Col>
    )
}

