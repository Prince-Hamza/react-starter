import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar2/Navbar'
import Footer from '../Footer2/Footer'
import { useEffect } from 'react'
import { useState } from 'react'
import $ from 'jquery'

export default function ContactUsPage() {
    
    const [contentHeight, setContentHeight] = useState([])

    useEffect(() => {
        // $(document).ready(() => {
        //     $("#aboutus").on('load', function () {
        //         var h = $("#aboutus").height()
        //         setContentHeight(h + 'px')
        //     })
        // })
        //let body = document.getElementsByTagName('body')[0]
        
        $("body").css({ overflow: 'hidden' })

    }, [])
    

    return (
        <Col lg={12}>
            <NavBar />
            <iframe title="ct" width={window.screen.width} height={window.screen.height} src={"http://www.chapterup.com/contact/"} allowFullScreen frameBorder="0"></iframe>
            {/* <Footer /> */}
        </Col>
    )
}
