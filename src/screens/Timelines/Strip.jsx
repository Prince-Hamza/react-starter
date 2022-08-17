import React from 'react'
import { Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function Strip() {
    return (
        <Row lg={12} style={{ ...Styles.strip, ...Content.rowSpaceEvenly }}>
            {/* <Col lg={2} xs={4} style={Content.colCentrify}>
                <div> 5 people engaged </div>
            </Col>

            <Col lg={2} xs={4} style={Content.colCentrify}>
                <div> 36 posts </div>
            </Col>

            <Col lg={2} xs={4} style={Content.colCentrify}>
                <div> 11 August 2022 </div>
            </Col> */}
        </Row>
    )
}

const Styles = ({
    strip: {
        height: '50px',
        backgroundColor: 'rgb(45,45,45)',
        color: 'white',
        marginBottom: '15px',
    }
})