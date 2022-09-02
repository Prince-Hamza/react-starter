import React from 'react'
import { Col } from 'react-bootstrap'
import NavBar from '../Navbar2/Navbar'
import Footer from '../Footer2/Footer'
import { useEffect } from 'react'
import $ from 'jquery'
import { useState } from 'react'

export default function GetSupport() {

    const [contentHeight, setContentHeight] = useState('1080px')

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
            <iframe style={{ zIndex: -1 }} id={'aboutus'} title="aboutus" width={window.screen.width} height={window.screen.height} src={"http://www.chapterup.com/booking/"} allowFullScreen frameBorder="0"></iframe>
            {/* <Footer Top={contentHeight} /> */}
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