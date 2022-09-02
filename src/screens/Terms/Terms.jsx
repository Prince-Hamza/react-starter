import React from 'react'
import { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import $ from 'jquery'

export default function Terms() {

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
            <iframe title="aboutus" width={window.screen.width} height={window.screen.height} src={"http://www.chapterup.com/terms-conditions/"} allowFullScreen frameBorder="0"></iframe>
        </Col>
    )
}
