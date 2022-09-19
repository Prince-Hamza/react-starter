import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import CalendarWrapper from './Calendar'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdVideocam } from 'react-icons/md'

export default function SetupCall({ Data, setData, value , onChange }) {

    

    return (
        <Col lg={12} xs={12} style={{ ...Content.colCentrify }} >

            <Col lg={6} xs={12}>
                <div style={Styles.title}> Easy setup of free call </div>

                <Row lg={4} xs={12} style={{ width: '100%', ...Content.rowLeftStart }}>
                    <AiOutlineClockCircle style={Styles.icon} />
                    <div style={Styles.iconDesc}> 15 minute  </div>
                </Row>

                <Row lg={4} xs={12} style={{ width: '100%', ...Content.rowLeftStart }}>
                    <MdVideocam style={Styles.icon} />
                    <div style={Styles.iconDesc}> Web cnferencing details provided pon confirmation </div>
                </Row>

                <br />

                <p style={{ textAlign: 'center' }} >
                    A short 15 min chat to learn more about your goals, share about the experience, and answer any questions you may have! Can’t wait!
                </p>
            </Col>
            <br />


            <Col lg={6}>
                <Row style={Styles.mainWrap}>
                    <Col lg={5} style={Styles.left}>
                        <br />
                        <h6>  Jay Kanahara </h6>
                        <div style={Styles.fifteen} > 15 minutes meeting </div>
                        <br />
                        <div> 15 min </div>
                        <div>  Web conferencing details provided upon confirmation</div>
                        <br />
                        <div> please use zoom details </div>
                        <br />
                        <div> Jay K is inviting you to a scheduled Zoom meeting    </div>
                        <br />
                    </Col>
                    <Col lg={5} style={Styles.right}>
                        <CalendarWrapper value={value} onChange={onChange} />
                    </Col>
                </Row>
            </Col>

            <br />

        </Col>
    )
}


const Styles = ({
    title: {
        color: '#8D51FF',
        fontFamily: 'Viga, Sans-serif',
        fontWeight: '800',
        fontSize: '32px'
    },
    icon: {
        width: '50px',
        marginTop: '4px'
    },
    iconDesc: {
        width: '80%',
        color: 'gray'
    },
    mainWrap: {
        width: '100%',
        height: 'auto',
        boxShadow: '0px 0px 8px 1px lightgray',
        ...Content.rowTopCenter,
    },
    left: {
        marginRight: '5px',
        ...Content.colTopLeft
    },
    right: {
        //  boxShadow: '0px 0px 8px 1px lightgray',
    },
    fifteen: {
        font: 'bold 28px poppins',
        fontWeight: '700',
        fontSize: '28px',
        lineHeight: '32px',
    }
})




