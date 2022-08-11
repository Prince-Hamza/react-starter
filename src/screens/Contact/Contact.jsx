import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function Contact() {
    return (
        <Row lg={12}>

            <Col lg={6}>

            </Col>

            <Col lg={6} style={Content.colCentrify}>
                <h4> Contact Now </h4>
                <br />
                <h6> Email: ojpojoh@gmail.com </h6>
                <br />
                <h6> </h6>
            </Col>


        </Row>
    )
}
