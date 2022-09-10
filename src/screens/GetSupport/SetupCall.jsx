import React, { useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import CalendarWrapper from './Calendar'
import axios from 'axios'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdVideocam } from 'react-icons/md'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default function SetupCall() {

    const [value, onChange] = useState(new Date())

    const saveAppointment = async () => {
        var userResp = await axios.get(`https://hutils.loxal.net/whois`)
        await firebase.database().ref('/chapterup/appointments').push({ scheduled: value.toDateString(), ...userResp.data })
    }

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


            <Row lg={12} style={Styles.mainWrap}>

                <Col lg={3} style={Styles.left}>
                    <h6>  Jay Kanahara </h6>
                    <div style={Styles.fifteen} > 15 minutes meeting </div>
                    <br />
                    <div> 15 min </div>
                    <div>  Web conferencing details provided upon confirmation</div>
                    <br />
                    <div> please use zoom details </div>
                    <br />
                    <div> Jay K is inviting you to a scheduled Zoom meeting
                    </div>
                </Col>

                <Col lg={3} style={Styles.right}>
                    <CalendarWrapper value={value} onChange={onChange} />
                </Col>

            </Row>

            <br />

            <Button onClick={() => { saveAppointment() }} >
                Schedule
            </Button>

            <br />
            
            <h6> What does it cost</h6>

            <p>
                Our initial consultation is free. At this point we work with you to either organise an initial one on one with a therapist or healer or include you in a supportive group. We will confirm the standard one on one sessions with you at our consultation. You can join the initial group session free. If you’d like to continue to be part of our group we would appreciate a payment of $29 on a monthly basis to be able to pay our kind hosts.
            </p>

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
        ...Content.rowTopCenter,
    },
    left: {
        boxShadow: '0px 0px 8px 1px lightgray',
        marginRight: '5px',
        height: '270px',
        ...Content.colTopLeft
    },
    right: {
        boxShadow: '0px 0px 8px 1px lightgray',
    },
    fifteen: {
        font: 'bold 28px poppins',
        fontWeight: '700',
        fontSize: '28px',
        lineHeight: '32px',
    }
})




