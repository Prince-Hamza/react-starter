import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar2/Navbar'
import Footer from '../Footer2/Footer'
import { useEffect } from 'react'
import { useState } from 'react'
import $ from 'jquery'

export default function GroupPage() {

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
            <iframe title="booking" width={window.screen.width} height={window.screen.height} src={"http://www.chapterup.com/group/"} allowFullScreen frameBorder="0"></iframe>
            {/* <Footer /> */}
        </Col>
    )
}
